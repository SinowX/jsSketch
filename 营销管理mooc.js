var ifQUIZ

if(window.location.href.search("quizscore")==-1)
    ifQUIZ=false
else
    ifQUIZ=true

var list=document.getElementsByClassName("m-choiceQuestion u-questionItem")
// var ques_list=[],type_list=[],descr_list=[],select_list=[]
var ques_list=[]
var question={}

for(var i=0;i<list.length;i++)
{
    var ques=list[i].getElementsByClassName("qaDescription")[0]
    var ques_type=ques.getElementsByTagName("span")[0].innerText
    
    var ques_desc_text=ques.getElementsByClassName("f-richEditorText")[0].innerText
    var ques_desc_img=""
    try{
        ques_desc_img=ques.getElementsByClassName("f-richEditorText")[0].getElementsByTagName("img")[0].getAttribute("src")
    }catch(err){}
    
    var choicesDOM=list[i].getElementsByClassName("optionPos")
    var choice=[]
    for(var j=0;j<choicesDOM.length;j++)
    {
        choice.push(choicesDOM[j].innerText)
    }


    var question=new Object()
    question["Question Type"]=ques_type
    question["Question Desc Text"]=ques_desc_text
    question["Question Desc Image"]=ques_desc_img
    question["Choices"]=choice

    if(ifQUIZ)
    {
        var answer=list[i].getElementsByClassName("tt2")[0].innerText
        question["Answer"]=answer
    }


    ques_list.push(question)
}

//ques_list 保存着题目信息