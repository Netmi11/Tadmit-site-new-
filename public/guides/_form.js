(function () {
  'use strict';

  var SUBSCRIBE_URL = 'https://n8n.srv1270696.hstgr.cloud/webhook/tadmit-guides';

  var slug = (window.GUIDE_CONFIG || {}).slug;
  var pdfUrl = (window.GUIDE_CONFIG || {}).pdfUrl;
  var guideTitle = (window.GUIDE_CONFIG || {}).title;

  var form = document.getElementById('guideForm');
  var nameInput = document.getElementById('nameInput');
  var emailInput = document.getElementById('emailInput');
  var checkbox = document.getElementById('termsCheckbox');
  var checkboxError = document.getElementById('checkboxError');
  var submitBtn = document.getElementById('submitBtn');
  var formState = document.getElementById('formState');
  var successState = document.getElementById('successState');

  function isValidEmail(e) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  }

  nameInput.addEventListener('input', function () { this.classList.remove('error'); });
  emailInput.addEventListener('input', function () { this.classList.remove('error'); });
  checkbox.addEventListener('change', function () { checkboxError.style.display = 'none'; });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var ok = true;

    if (!nameInput.value.trim()) { nameInput.classList.add('error'); ok = false; }
    var email = emailInput.value.trim();
    if (!email || !isValidEmail(email)) { emailInput.classList.add('error'); ok = false; }
    if (!checkbox.checked) { checkboxError.style.display = 'block'; ok = false; }

    if (!ok) return;

    submitBtn.disabled = true;
    submitBtn.classList.add('loading');

    var payload = {
      name: nameInput.value.trim(),
      email: email,
      slug: slug,
      pdf_url: pdfUrl,
      title: guideTitle,
      source: 'tadmit-site',
    };

    fetch(SUBSCRIBE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(function (r) {
        if (!r.ok) throw new Error('subscribe ' + r.status);
        return r.json().catch(function () { return {}; });
      })
      .then(function () { showSuccess(); })
      .catch(function (err) {
        try {
          var pending = JSON.parse(localStorage.getItem('tb_leads_pending') || '[]');
          pending.push(Object.assign({}, payload, { ts: new Date().toISOString(), error: String(err) }));
          localStorage.setItem('tb_leads_pending', JSON.stringify(pending));
        } catch (_) {}
        showSuccess();
      });
  });

  function showSuccess() {
    formState.classList.add('hidden');
    successState.classList.add('active');
  }
})();
