// Landing-page workshop sign-up. Posts to the same Google Apps Script as /workshop/
// (keep ENDPOINT in sync with CONFIG.formEndpoint in workshop/index.html).
(function () {
  const ENDPOINT = "https://script.google.com/macros/s/AKfycbwgVaMSU_jfMBqq3xEXk-_I3YCyJxg-8AjkTvdZKVzxnUJCUgoi7SrKBYOj0Gcbkbc/exec";
  const STORE_KEY = "plab-signed"; // shared with /workshop/ so both pages remember the sign-up

  const form = document.getElementById("signup-form");
  if (!form) return;
  const err = document.getElementById("signup-error");
  const btn = document.getElementById("signup-submit");

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  };

  function showDone(name, status) {
    const first = name.split(/\s+/)[0];
    form.classList.add("hidden");
    document.getElementById("signup-done").classList.remove("hidden");
    const title = document.getElementById("signup-done-title");
    const msg = document.getElementById("signup-done-msg");
    if (status === "waitlist") {
      title.textContent = `You're on the waitlist, ${first}.`;
      msg.textContent = "All seats are taken. We'll email you if one opens up.";
    } else if (status === "already") {
      title.textContent = `You're already in, ${first}!`;
      msg.textContent = "That email is already signed up. See you Friday.";
    } else {
      title.textContent = `See you there, ${first}!`;
      msg.textContent = "Your seat is saved. Bring a laptop, charger, and resume.";
    }
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    err.textContent = "";
    const fd = new FormData(form);
    if (fd.get("_gotcha")) return;
    const name = (fd.get("name") || "").trim();
    const email = (fd.get("email") || "").trim();
    const stage = fd.get("stage") || "";
    if (!name) { err.textContent = "Add your name."; return form.name.focus(); }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { err.textContent = "That email doesn't look right."; return form.email.focus(); }

    btn.disabled = true;
    btn.textContent = "Saving…";
    const data = { name, email, stage, signedUpAt: new Date().toISOString() };
    let result = {};
    try {
      try {
        const res = await fetch(ENDPOINT, { method: "POST", body: new URLSearchParams(data) });
        result = await res.json();
      } catch (_) {
        // Script reply not readable: send it anyway and assume it was saved (same as /workshop/)
        await fetch(ENDPOINT, { method: "POST", body: new URLSearchParams(data), mode: "no-cors" });
      }
      const status = result.full ? "waitlist" : result.already ? "already" : "in";
      store.set(STORE_KEY, JSON.stringify({ name, status }));
      showDone(name, status);
    } catch (_) {
      err.textContent = "Couldn't save your seat. Check your connection and try again.";
      btn.disabled = false;
      btn.textContent = "Submit";
    }
  });

  const prior = store.get(STORE_KEY);
  if (prior) {
    try { const p = JSON.parse(prior); if (p && p.name) showDone(p.name, p.status); } catch (_) {}
  }
})();
