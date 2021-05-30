var utils=require("./EXAMPLE/utils")
var readlineSync=require("readline-sync")
const readline=require("readline")
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const gl=require("./getlineSync")

function SearchAnswer(the_Astr,the_Qstr)
{
    try{
        console.log(1)
        var the_Answer=JSON.parse(the_Astr)
        console.log(2)
        console.log(the_Answer)
        the_Answer=JSON.parse(the_Answer)
        console.log(the_Answer)
        // the_Answer='"'+the_Answer+'"'
    }catch(err){
        console.log(err)
        return;
    }

    try{
        var the_Question=JSON.parse(the_Qstr)
        the_Question=JSON.parse(the_Question)
        // the_Question='"'+the_Question+'"'
    }catch(err){
        console.log(err)
        return;
    }
    
    
    // console.log(the_Answer)
    // console.log(the_Question)
    
    // console.log(the_Question[0].`Question Type`)
    
    for(var i=0;i<the_Question.length;i++)
    {
        for(var j=0;j<the_Answer.length;j++)
        {
    
            if(the_Question[i].Question_Desc_Image!='')
            {
                if(the_Question[i].Question_Desc_Image==the_Answer[j].Question_Desc_Image)
                {
                    console.log("The Answer of No."+i+" : "+the_Answer[j].Answer)
                    console.log(the_Question[i].Question_Desc_Text)
                    console.log(utils.times('-',40))

                    the_Answer.splice(j,1)
                    break
                }
            }else{
                if(the_Question[i].Question_Desc_Text==the_Answer[j].Question_Desc_Text)
                {
                    console.log("The Answer of No."+i+" : "+the_Answer[j].Answer)
                    console.log(the_Question[i].Question_Desc_Text)
                    console.log(utils.times('-',40))
                    the_Answer.splice(j,1)
                    break
                }
            }
    
            
        }
    }
}

function main()
{
    

    // rl.question("请输入测试页面题目信息\n",(the_Qstr)=>{
    //     while(true)
    //     {
    //         rl.question("请输入答案页面题目信息(退出按q)\n",(the_Astr)=>{
    //             if(the_Astr=="q")
    //             {
    //                 return;
    //             }
    //             console.log()
    //             SearchAnswer(the_Astr,the_Qstr)
    //         })
    //     }
    // })



    
    var the_Qstr =readlineSync.question("请输入测试页面题目信息\n",{bufferSize:4096})
    console.log(the_Qstr)
    while(true)
    {
        var the_Astr= readlineSync.question("请输入答案页面题目信息(退出按q)\n")
        if(the_Astr=="q")
            break
        console.log()
        SearchAnswer(the_Astr,the_Qstr)
    }
    
}

main()