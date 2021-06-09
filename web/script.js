isft = true;
plans = []
function add(plans2) {
  plans = plans2
  if (isft){
    tab = '<div class="ft">\
      <button type="button" id="tab0" class="tab" name="button">план0</button>\
      <button type="button" class="button" id="rename_bt'+ isplan +'" onclick="rename(\'план0\',\''+ isplan +'\')" name="button">\
        <img src="img/pencil.png" alt="">\
      </button>\
    </div>\
    ';
    oldtabs = document.getElementById('tabs').innerHTML;
    document.getElementById('tabs').innerHTML = oldtabs + tab;
    isft = false
    plans.push('план' + (isplan + 1))
eel.newplan('план' + isplan)
isplan++
  }
  else{
    tab = '<div class="t">\
    <button type="button" id="tab'+ isplan +'" class="tab" name="button">план' + isplan + '</button>\
      <button type="button" class="button" id="rename_bt'+ isplan +'" onclick="rename(\''+ plans[isplan - 1] +'\',\''+ isplan +'\')" name="button">\
        <img src="img/pencil.png" alt="">\
      </button>\
    </div>\
    ';
    oldtabs = document.getElementById('tabs').innerHTML;
    document.getElementById('tabs').innerHTML = oldtabs + tab;
    isft = false
    plans.push('план' + (isplan + 1))
    eel.newplan('план' + isplan)
    isplan++
  }


}

isrename = true;
function rename(oldname, idname) {
  if (isrename){
    document.getElementById('tab' + idname).innerHTML = '<input type="text" id="newname" class="new_name_input">';
    document.getElementById('rename_bt' + idname).innerHTML = '<img src="img/save.png">';
    isrename = false
  }
  else{
    newname = document.getElementById('newname').value;
    filename = document.getElementById('newname').value + '.txt';
    document.getElementById('rename_bt' + idname).innerHTML = '<img src="img/pencil.png">';
    document.getElementById('tab' + idname).innerHTML = newname;

    fileoldname = oldname + '.txt'
    console.log(oldname + ' ' + filename)
    eel.savename(fileoldname, filename);
    isrename = true;
  }
}
function output(name) {
  document.getElementById('main').innerHTML = name
}
