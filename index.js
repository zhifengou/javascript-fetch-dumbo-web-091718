const app = "I don't do much.";
const token = 'ec558943f119c33be42b0db342a59c38dc2b3c29'
  
fetch('https://api.github.com/user/repos',{
  headers:{
    Authorization: `token ${token}`
  }
}).then(res=>res.json()).then(json=>console.log(json))
