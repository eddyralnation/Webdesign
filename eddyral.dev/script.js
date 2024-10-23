function togglemenu()
{
  var menuList=document.getElementById('menuList')

  if(menuList.style.maxWidth=="0px" )
  {
    menuList.style.maxWidth="500px";
    menuList.style.opacity="100%";
    actionIcon.classList.add("action");
  }
  else
  {
    menuList.style.maxWidth="0px";
    menuList.style.opacity="0%";
    actionIcon.classList.remove("action");

  }
}