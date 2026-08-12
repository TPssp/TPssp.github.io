(function () {
  'use strict';

  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');

  if (!toggle) return;

  function updateToggle(theme) {
    var nextTheme = theme === 'dark' ? 'light' : 'dark';
    var label = 'Switch to ' + nextTheme + ' mode';
    toggle.setAttribute('aria-label', label);
    toggle.setAttribute('title', label);
  }

  function applyTheme(theme, remember) {
    root.classList.add('theme-changing');
    root.setAttribute('data-theme', theme);
    updateToggle(theme);

    if (remember) {
      try {
        localStorage.setItem('theme', theme);
      } catch (error) {
        // The selected theme still works when storage is unavailable.
      }
    }

    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        root.classList.remove('theme-changing');
      });
    });
  }

  updateToggle(root.getAttribute('data-theme') || 'light');

  toggle.addEventListener('click', function () {
    var currentTheme = root.getAttribute('data-theme') || 'light';
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark', true);
  });

  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  var handleSystemThemeChange = function (event) {
    try {
      if (localStorage.getItem('theme')) return;
    } catch (error) {
      return;
    }

    applyTheme(event.matches ? 'dark' : 'light', false);
  };

  if (systemTheme.addEventListener) {
    systemTheme.addEventListener('change', handleSystemThemeChange);
  } else if (systemTheme.addListener) {
    systemTheme.addListener(handleSystemThemeChange);
  }
}());
