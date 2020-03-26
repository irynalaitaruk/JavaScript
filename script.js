window.onload = function () {
		function getId(a) {
			return document.getElementById(a);
		}
		//textarea
		var x = document.forms.f1;
		x.edit.onclick = function () {
			getId('txtArea').style.display = 'block';
			getId('fontEditor').style.display = 'none';
			getId('tableColor').style.display = 'none';
			getId('newText').value = getId('box1').innerHTML;
		}
		x.stylize.onclick = function () {
			getId('txtArea').style.display = 'none';
			getId('fontEditor').style.display = 'block';
		}
    //blocked
        x.blocked.onclick = function(){
            var userinput = prompt('Type your password,please','pass');
            var password = 'pass';
            if(userinput != password){
                alert('Password is incorrect');
            getId('box1').style.display = 'none';
            getId('box2').style.display = 'none';
            getId('edit').style.display = 'none';
            getId('stylize').style.display = 'none';
            getId('blocked').style.display = 'none';
            getId('bd').style.backgroundImage = 'none';
            getId('bd').style.backgroundColor = 'black';
            }
            else{
                alert('Welcome to site!');
            }
        }
        
    
		var y = document.forms.f2;
		y.save.onclick = function () {
			getId('box1').innerHTML = getId('newText').value;
		}
		y.add.onclick = function () {
            getId('main').style.display = 'none';
            getId('main2').style.display = 'block';
            getId('list').style.display = 'none';
			}
//fontStylizeBox
        //fontSize
		var z = document.forms.f3;
		z.pt12.onclick = function () {
			getId('box1').style.fontSize = getId('pt12').value;
		}
		z.pt14.onclick = function () {
			getId('box1').style.fontSize = getId('pt14').value;
		}
		z.pt16.onclick = function () {
			getId('box1').style.fontSize = getId('pt16').value;
		}
		z.pt18.onclick = function () {
			getId('box1').style.fontSize = getId('pt18').value;
		}
		z.pt20.onclick = function () {
				getId('box1').style.fontSize = getId('pt20').value;
			}
//fontFamile
	var f = document.forms.font;
f.selectItem.onchange = function(){
for(var i = 0; i< f.selectItem.length; i++){
    if(f.selectItem[i].selected){
getId('box1').style.fontFamily =  f.selectItem[i].value;
							}
						}
					}
//fontColor
		var c = document.forms.color;
		c.txtColor.onclick = function () {
			getId('tableColor').style.display = 'table';
			getId('tableBgColor').style.display = 'none';
		}
		var fontColor = document.getElementsByClassName('txt');
		for (var i = 0; i < 9; i++) {
			fontColor[i].onclick = function () {
				getId('box1').style.color = this.style.background;
				getId('tableColor').style.display = 'none';
			}
		}
		c.bgColor.onclick = function () {
			getId('tableBgColor').style.display = 'table';
			getId('tableColor').style.display = 'none';
		}
		var bgClr = document.getElementsByClassName('bg');
		for (var i = 0; i < 9; i++) {
			bgClr[i].onclick = function () {
				getId('box1').style.backgroundColor = this.style.background;
				getId('tableBgColor').style.display = 'none';
			}
		}
//boldItalicText
		var b = document.forms.boldItalic;
		b.bold.onclick = function () {
			if (this.checked) {
				getId('box1').style.fontWeight = this.value;
			}
			else {
				getId('box1').style.fontWeight = 'normal';
			}
		}
		b.italic.onclick = function () {
				if (this.checked) {
					getId('box1').style.fontStyle = this.value;
				}
				else {
					getId('box1').style.fontStyle = 'normal';
				}
			}
//addTableList
		getId('tbl').onclick = function () {
			if (this.checked) {
				getId('main').value = getId('table').value;
				getId('list').style.display = 'none';
			}
		}
		getId('lst').onclick = function () {
			if (this.checked) {
				getId('main').value = getId('list').value;
				getId('table').style.display = 'none';
				getId('list').style.display = 'block';
			}
		}

		getId('create').onclick = function () {
				var tr_n = getId('tr_n').value;
				var td_n = getId('td_n').value;
				var wd_n = getId('wd_n').value;
				var hg_n = getId('hg_n').value;
				var thick = getId('thick').value;
				var ln = getId('line').value;
				var clr = getId('color').value;
				var tbl = document.createElement('table')
				for (var i = 0; i < tr_n; i++) {
					var tr = document.createElement('tr');
					for (var j = 0; j < td_n; j++) {
						var td = document.createElement('td');
						td.style.border = thick + "px " + ln + " " + clr;
						td.width = wd_n + 'px';
						td.height = hg_n + 'px';
						tr.appendChild(td);
					}
					tbl.appendChild(tr);
				}
				getId('box1').appendChild(tbl);
				getId('main').style.display = 'block';
				getId('main2').style.display = 'none';
                getId('newText').value = getId('box1').innerHTML;
			}
//list
    getId('createL').onclick = function(){
     var count = getId('count').value;
     var mark = getId('mark').value; 
        var ul = document.createElement('ul');
            ul.listStyle = mark;
        for(var i = 0; i<count; i++){
        var li = document.createElement('li');
        li.innerHTML = 'Hello';
            ul.appendChild(li);
        }
       getId('box1').appendChild(ul);
       getId('main').style.display = 'block';
       getId('main2').style.display = 'none';
       getId('newText').value = getId('box1').innerHTML;
    }
        
        
	}





	//function familyfont(){
	//		 document.getElementById('box1').style.fontFamily =  document.getElementById('selectFamily').value;
	//	}