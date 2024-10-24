function togglemenu()
{
  var menuList=document.getElementById('menuList');
  var video=document.querySelector('video');
  var bodycontent=document.querySelector('body');

  if(menuList.style.maxWidth=="0px" )
  {
    menuList.style.maxWidth="500px";
    menuList.style.opacity="100%";
    actionIcon.classList.add("action");
    video.classList.add("blur");   // Added blur to video
    bodyContent.classList.add("blur");
  }
  else
  {
    menuList.style.maxWidth="0px";
    menuList.style.opacity="0%";
    actionIcon.classList.remove("action");
    video.classList.remove("blur");   // Added blur to video
    bodyContent.classList.remove("blur");

  }
}