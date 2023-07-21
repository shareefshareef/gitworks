// console.log("person1: shows ticket")
// console.log("person2: shows ticket")

// const preMovie = async () => {
//     const wifeBringsTicket = new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             reject("no ticket")
//         },3000)
//     })

//     let ticket;

//     try{
//         ticket = await wifeBringsTicket
//     }
//     catch(e){
//         ticket = "ticket lost..."
//     }

//     // const bringPopCorn = new Promise((resolve,reject)=>{
//     //     resolve("PopCorn")
//     // })

//     // const getButter = new Promise((resolve,reject)=>resolve("Butter"))

//     // const getColdDrink = new Promise((resolve,reject)=>resolve("cool Drink"))
//     // let ticket = await wifeBringsTicket
//     // // console.log(`husband: you got ${ticket} right`)
//     // // console.log(`wife: yes`)
//     // // console.log("husband: let go")
//     // // console.log("wife: no i need popcorn")

//     // let corn = await bringPopCorn
//     // // console.log(`husband: take your ${corn}`)
//     // // console.log("husband: shall we go in")
//     // // console.log("wife: no i need butter in Popcorn")

//     // let butter = await getButter
//     // // console.log(`husband: here your order popcorn with ${butter}`)
//     // // console.log("husband: lets go now ")
//     // // console.log("wife: i need cold drink")

//     // let drink = await getColdDrink

//     // console.log(`husband: here yours ${drink}`)
//     // console.log("husband: shall we go now")
//     // console.log("wife: ofcouse lets' go ...")

//     // let [ticket,corn,butter,drink] = await Promise.all([wifeBringsTicket,bringPopCorn,getButter,getColdDrink])
//     return ticket
// }
// preMovie().then((m)=> console.log(`person3: shows ${m}`))
// console.log("person4: shows ticket")
// console.log("person5: shows ticket")

posts = [{"title":"post One"},{"title":"post Two"}]

getPost = () =>{
    setTimeout(()=>{
        posts.forEach((post,index)=>{
        console.log(post.title)
    })
    },1000)
}
createPost = (post) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post)
            resolve(post)
        },1000)//settimeout closing
    })//promise closing
}
UpdateLastUserActivityTime = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const Time = new Date()
            resolve(Time)
        },1000)
    })
}
deletePost = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length != 0){
                let delItem = posts.pop()
                resolve(delItem)
            }
            else{
                const Err = new Error("There is no Post Available to delete...")
                reject(Err)
            }
        },1000)
    })
}


const socialPost = async () =>{

    try{
        let pst = await createPost({"title":"post three"})
        console.log(pst.title)

        let activity = await UpdateLastUserActivityTime()
        console.log(activity)

        await getPost()

        let delp = await deletePost()
        


    }
    catch(e){
        console.log(e)
    }

}
socialPost()
