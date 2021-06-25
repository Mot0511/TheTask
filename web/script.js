isft = true;
plans = []
function add(plans2) {
  plans = plans2
  if (isft){
    tab = '<div class="ft" id="план0">\
      <button type="button" id="tab0"  onclick="output(\'план0\')" class="tab" name="button">план0</button>\
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
    console.log(plans)
    console.log(isplan)
    tab = '<div class="t" id="'+ plans[isplan - 1] +'">\
    <button type="button" id="tab'+ isplan +'"  onclick="output(\''+ plans[isplan - 1] +'\')" class="tab" name="button">план' + isplan + '</button>\
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
    document.getElementById('del_bt').setAttribute('onclick', 'del(\''+ name +'\')')
    main_content = '<button type="button" class="task_bt" onclick="add_task(\''+ name +'\')" name="button">Добавить задачу</button>\
    <div class="tasks" id="tasks">\
    </div>\
    '
    document.getElementById('main').innerHTML = main_content
    document.getElementById('write_task_bt').setAttribute('onclick', 'write_task(\''+ name +'\')')
    eel.load_tasks(name)

}
function del(name) {
    tab = document.getElementById(name)
    console.log(name)
    tab.setAttribute('style', 'display: none;')
    eel.del_plan(name)
    document.getElementById('main').innerHTML = ''
}
function add_task(name) {
  document.getElementById('add_task_win').style = 'display: block;'

}
function close_win() {
  document.getElementById('add_task_win').style = 'display: none;'
}
function write_task(name) {
  task = document.getElementById('input_task').value
  eel.write_file_task(name, task)
}
