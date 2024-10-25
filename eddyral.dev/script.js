function togglemenu()
{
  var menuList=document.getElementById('menuList');
  var video=document.querySelector('video');
  var bodycontent=document.querySelector('.heading');

  if(menuList.style.maxWidth=="0px" )
  {
    menuList.style.maxWidth="500px";
    menuList.style.opacity="100%";
    actionIcon.classList.add("action");
    video.classList.add("blur");   // Added blur to video
    bodyContent.classList.add("blur"); //in the making(to be ignored for now)
  }
  else
  {
    menuList.style.maxWidth="0px";
    menuList.style.opacity="0%";
    actionIcon.classList.remove("action");
    video.classList.remove("blur");   // removed blur to video
    bodyContent.classList.remove("blur"); //in the making(to be ignored for now)

  }
}