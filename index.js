const loadpost=async(catagotres)=>{
    const response=await fetch (`https://openapi.programming-hero.com/api/retro-forum/posts${catagotres ?`?category=${catagotres}` : ''}`) 
    const data=await response.json();
    displayposts(data.posts)
}
    
loadpost()


const displayposts =(posts)=>{
    document.getElementById('post-container').innerHTML=""
    
    const postcontiner=document.getElementById('post-container')

     posts.forEach(element => {
        console.log(element)
        const div=document.createElement('div');
        div.innerHTML=`
         <body class="bg-gray-100 p-6">
    <div class="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <!-- Flexbox Layout for Image and Content -->
        <div class="flex items-center">
            <!-- Image Section -->
            <div class="w-1/3">
                <!-- Placeholder for dynamic image -->
                <img src="${posts.image} alt="Dynamic Image" class="h-full w-full object-cover">
            </div>

            <!-- Content Section -->
            <div class="w-2/3 p-4">
                <!-- Placeholder for dynamic title -->
                <h2 class="text-xl font-semibold text-gray-800">${element.title}
                <p class="text-gray-600 mt-1">It is one thing to subject yourself to a costume mishap.</p>

                <!-- Static stats section -->
                <div class="bg-gray-100 p-2 mt-4 flex justify-between text-sm text-gray-500 border-t">
                    <div class="flex items-center">
                        <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-6l-4 4V18H7a2 2 0 01-2-2v-6a2 2 0 012-2h2"></path>
                        </svg>
                        560
                    </div>
                    <div class="flex items-center">
                        <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A2 2 0 0122 9.618v4.764a2 2 0 01-2.447 1.894L15 14M4 6h16M4 10h16m-7 4h7"></path>
                        </svg>
                        1568
                    </div>
                    <div class="flex items-center">
                        <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-3.315 0-6 2.29-6 5.063V17a2 2 0 002 2h8a2 2 0 002-2v-3.937C18 10.29 15.315 8 12 8zM12 4a2 2 0 100 4 2 2 0 000-4z"></path>
                        </svg>
                        5 Min
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
        `
        postcontiner.append(div)

     });
   

}


const handleSearchByCategory=()=>{
    console.log("ok click here")
    const searchText=document.getElementById('searchPosts').value
    loadpost(searchText)
}



const lestposts=async()=>{
      const res=await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
      const data= await res.json();
      displaylestedposts(data)
}
lestposts()

const displaylestedposts=(data)=>{
       console.log(data)
       const latest_post_container=document.getElementById('latest-post-container');
       data.forEach(element => {
        const div=document.createElement('div');
        div.innerHTML=`
        <div class="card lg:w-96 pb-5 bg-base-100 shadow-2xl">
          <figure class="lg:px-6 px-4 pt-4 lg:pt-8">
              <img
                  src=${element.cover_image}
                  alt="Shoes"
                  class="rounded-xl"
              />
          </figure>
          <div class="p-5 lg:p-10 space-y-4 lg:space-y-5">
              <p class="opacity-50 text-start">
                  <i class="fa-solid fa-calendar-days me-2"></i>${element.author.posted_date?`${element.author.posted_date}` : "No Publish Date"}
              </p>
              <h2 class="card-title text-start">${element.title}</h2>
              <p class="text-start">
                  ${element.description}
              </p>
              <div class="card-actions flex gap-5 items-center">
                  <div class="avatar">
                      <div
                          class="lg:w-12 w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                      >
                          <img
                          src=${element.profile_image}
                          />
                      </div>
                  </div>
              <div>
              <h3 class="text-start font-extrabold">${element.author.name}</h3>
              <p class="text-start opacity-60">${element.author.designation ?`${element.author.designation}`: "Unknown"}</p>
          </div>
      </div>
        

          <span
            id="latestPostLoader"
            class="loading loading-infinity loading-lg lg:mt-24 text-primary hidden"
          >
        

          
        
        
        </span>
        
        </div>
        
        `
        latest_post_container.append(div)
        
       });
}

const loadellatsall=()=>
{
    const div =document.createElement('div')
}