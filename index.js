let getProduct = async () => {

    //GET-request (with fetch)
    // let response = await fetch("http://localhost:1337/api/products");
    // let json = await response.json();
    // console.log(json);

    //GET-request (with axios);
    let response = await axios.get("http://localhost:1337/api/products", {
      headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("token")}`
      }
    })
    console.log(response.data);
}

// getProduct();

let createProduct = async () => {
      //With Fetch
//   let response = await fetch("http://localhost:1337/api/products", {
//     //config
//     method: "POST",
//     body: JSON.stringify(
//         {
//             data: {
//                 name: "Headset",
//                 price: 99,
//             },
//         }
//     ),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   let data = await response.json();
//   console.log(response, data);

  //With Axios

  let response = await axios.post("http://localhost:1337/api/products", {
    //request body
    data: { 
        price: 20,
        name: "Kanelbullar",
    },
    },  {
      //config
      headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("token")}`
      }
    }   
  );
  console.log(response);
}

// createProduct();

//Fetch

let editProduct = async () => {
//   let response = await fetch("http://localhost:1337/api/products/2", {
//     //config
//     method: "PUT",
//     body: JSON.stringify({
//       data: {
//         price: 4999,
//       },
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   let data = await response.json();
//   console.log("Edited data", response, data);
  //Axios
  await axios.put(
    `http://localhost:1337/api/products/15`,
    {
      data: {
        price: 59,
      },
    }, {
      headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("token")}` 
      }
    }
   );
}

// editProduct()

let deleteProduct = async () => {
    //With fetch
    // await fetch("http://localhost:1337/api/products/6", {
    //     method:"DELETE"
    // })
    //With Axios
    await axios.delete("http://localhost:1337/api/products/15", {
      headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("token")}`
      }
    });
}

// deleteProduct();

//AUTHENTICATION

//Login

let login = async () => {
 let response = await axios.post('http://localhost:1337/api/auth/local', {
    identifier: 'TestUser',
    password: 'Test1234',
  });
  sessionStorage.setItem("token", response.data.jwt);
}

login()

