function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
    } else {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
    }
    let kontenElements = document.querySelectorAll(".konten");
    kontenElements.forEach(function (element) {
        if (theme === 'dark') {
            element.classList.replace("konten-putih", "konten-hitam");
        } else {
            element.classList.replace("konten-hitam", "konten-putih");
        }
    });
  }
  
  // Function to toggle between light and dark themes
  function toggleTheme() {
    var currentTheme = localStorage.getItem('theme'); // Get the currently saved theme
    var newTheme = (currentTheme === 'light') ? 'dark' : 'light'; // Toggle between light and dark
    localStorage.setItem('theme', newTheme); // Save the selected theme to localStorage
    applyTheme(newTheme); // Apply the new theme
    
    // Update the switch appearance
    updateThemeSwitch(newTheme);
  }
  
  // Function to check and apply the stored theme preference
  function checkStoredTheme() {
    var storedTheme = localStorage.getItem('theme'); // Get the stored theme preference
    if (storedTheme) {
        applyTheme(storedTheme); // Apply the stored theme
        updateThemeSwitch(storedTheme); // Update the switch appearance based on the stored theme
    } else {
        localStorage.setItem('theme', 'light'); // Set default theme to light if no theme preference is stored
    }
  }
  
  // Function to update the appearance of the theme switch based on the current theme
  function updateThemeSwitch(theme) {
    const themeSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    if (theme === 'dark') {
        themeSwitch.checked = true; // Set the switch to checked if the theme is dark
    } else {
        themeSwitch.checked = false; // Set the switch to unchecked if the theme is light
    }
  }
  
  // Function to check and apply the stored theme preference
  function checkStoredTheme() {
    var storedTheme = localStorage.getItem('theme'); // Get the stored theme preference
    if (storedTheme) {
        applyTheme(storedTheme); // Apply the stored theme
        updateThemeSwitch(storedTheme); // Update the switch appearance based on the stored theme
    } else {
        localStorage.setItem('theme', 'light'); // Set default theme to light if no theme preference is stored
    }
  }
  
  // Call checkStoredTheme when the page loads
  window.onload = function() {
    checkStoredTheme();
    const themeSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    themeSwitch.addEventListener("change", toggleTheme);
  };
  
  // Event listener for theme switch
  const themeSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  themeSwitch.addEventListener("change", toggleTheme);