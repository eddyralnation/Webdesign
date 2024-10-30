function togglemenu()
{
  var menuList=document.getElementById('menuList');
  var video=document.querySelector('video');

  if(menuList.style.maxWidth=="0px" )
  {
    menuList.style.maxWidth="250px";
    menuList.style.opacity="100%";
    actionIcon.classList.add("action");
    video.classList.add("blur");   // Added blur to video
  }
  else
  {
    menuList.style.maxWidth="0px";
    menuList.style.opacity="0%";
    actionIcon.classList.remove("action");
    video.classList.remove("blur");   // removed blur to video
  }
}

// Close menu when any menu item is clicked
var menuLinks = document.querySelectorAll('#menuList a');
menuLinks.forEach(function(link) {
    link.addEventListener('click', togglemenu);
});

// Set initial style of menuList
document.getElementById('menuList').style.maxWidth = "0px";
