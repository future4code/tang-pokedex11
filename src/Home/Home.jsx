 // eslint-disable-next-line
import React from 'react'
import './Home.css'

function Home(props) {
  const { history } = props;

 
  return (
    <div>
      
      <a href="https://www.letras.mus.br/pokemon/1503724/" target="_blank" rel="noopener noreferrer">
        <h3 class="span-audio">Música intro da primeira temporada ⇨ letra da música ⇦</h3>
      </a>
      
      <audio src="pokemon.mp3" className="audio" controls="controls"
        preload="auto" autoplay></audio>

      <div class="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
        <div class="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none">
          <h1 class="textanimate anim" data-text="Pokédex">Pokédex</h1>
        </div>
      <div class="col-start-1 row-start-2 px-4 sm:pb-16">
        <div class="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
          <svg width="20" height="20" fill="currentColor" class="text-violet-600">
            <path d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z" />
          </svg>
          <div class="ml-1">
            <span class="text-black">4.97</span>
            <span class="sm:hidden md:inline">(328)</span>
          </div>
          <div class="text-base font-normal mx-2">·</div>
          <div>Desenvolvedores</div>
        </div>
        </div>
        
        <div class="col-start-1 row-start-3 space-y-3 px-5">
        <p class="flex items-center text-black text-sm font-medium">
          <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEy0YCBRi20Dw/profile-displayphoto-shrink_200_200/0/1605805087604?e=1614211200&v=beta&t=SP1ZoII8RiLzDvyfQUQmFm6Iu7mME_MB-js0nbL374c" alt="imagem-dev" class="w-6 h-6 rounded-full mr-2 bg-gray-100" />
          Helena Rangel
        </p>
              
        <p class="flex items-center text-black text-sm font-medium">
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHrBYDgXlZSvg/profile-displayphoto-shrink_200_200/0/1602831672535?e=1616025600&v=beta&t=j1DiEZ_BJve0ErhJch4VlYUPkAxNiPqYyXVMMKaEVEw" alt="imagem-dev" class="w-6 h-6 rounded-full mr-2 bg-gray-100" />
          Vulquimar Silva
        </p>
        <br /><br />
              
        <button
        type="button"
        class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-6 py-3 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-0 sm:w-auto sm:text-sm"
        onClick={() => history.push("/lista")}>
                Acessar lista de Pokemons
        </button>
              
      </div>
      <div class="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
        <div class="w-full grid grid-cols-4 grid-rows-2 gap-3">
          <div class="relative col-span-3 row-span-2 md:col-span-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="imagens·pokemons" />
          </div>
          
          <div class="relative hidden md:block">
            <img src="https://i.imgur.com/XqyZIS3.gif" alt="imagens·pokemons" />
          </div>
          
          <div class="relative hidden md:block">
            <img src="https://i.pinimg.com/originals/aa/d0/b3/aad0b3d0eed390330cfe0a23206d2030.gif" alt="imagens·pokemons" />
          </div>
          
          <div class="relative hidden md:block">
            <img src="https://i.pinimg.com/originals/f5/b6/88/f5b688276139640aee6dbb4de8d8afd5.gif" alt="imagens·pokemons" />
          </div>
          
          <div class="relative hidden md:block">
            <img src="https://thumbs.gfycat.com/ImpureScalyBunting-max-1mb.gif" alt="imagens·pokemons" />
          </div>
          
        </div>
      </div>
      </div>
      <p class="text-sm font-medium text-white sm:mb-1 sm:text-gray-500" style={{ position: "absolute", bottom: "0", width: "100%", textAlign: "center"}}>Copyright &copy; Tang·<span style={{color: "rgb(220, 38, 38)"}}>Labenu</span> 2021</p>
    </div>
  )
}

export default Home;
