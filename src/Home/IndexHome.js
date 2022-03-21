import React from 'react'

const IndexHome = () => {
  return (
    <div>
        <section class="projects-horizontal">
        <div class="container">
            <div class="intro">
                <h2 class="text-center" style="color: #5AAFCC;font-size: 48px;">Acompanhe seu
        filho com TEA</h2>
                <p class="text-center">Um aplicação para ajudar com a comunicação de crianças, adolescentes e adultos.
        Contém ainda ferramentas para auxiliar no dia-a-dia.
        
         </p>
            </div>
           <div class="row d-inline-flex projects">
                <div class="col-sm-6 col-12 item">
                    <div class="row">
                        <div class="col-md-12 col-lg-5"><a href="#"><img class="img-fluid rounded-lg" src="~/media/pexels-sharon-mccutcheon-1148998.jpg" style="max-height:180px;"></a></div>
                        <div class="col">
                            <h3 class="name">Green Tea</h3>
                            <p class="description"> Um projeto para trazer inclusão.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-12 item">
                    <div class="row">
                        <div class="col-md-12 col-lg-5"><a href="#"><img class="img-fluid rounded-lg" src="~/media/Autismo-em-adultos-Sinais-de-autismo-em-adultos-Dr-Matheus-Trilico-Neurologista-em-Curitiba.jpg" style="height:180px; max-height:180px;"></a></div>
                        <div class="col">
                            <h3 class="name">Acesso Universal</h3>
                            <p class="description">Pensado no bem-estar da criança e da família. </p>
                        </div>
                    </div>
                </div>
        
            </div>
        </div>
        </section>
        <section class="highlight-blue" style="background: #5AAFCC;">
        <div class="container">
            <div class="intro">
                <h2 class="text-center" style="font-weight: bold;font-size: 48px;">Sobre</h2>
                <p class="text-center" style="font-size: 20px;color: #fff;">Criado pensando nas famílias e crianças que têm TEA e que precisam de um auxílio que a tecnologia tem a oferecer atualmente.</p>
            </div>
            <div class="buttons"><a asp-area="" asp-controller="Home" asp-action="Wnoise" class="btn btn-primary" role="button" >Saiba mais</a></div>
        </div>
        </section>
        <section class="features-boxed">
        <div class="container">
            <div class="intro">
                <h2 class="text-center" style="color: #5AAFCC;font-size: 48px;">Ferramentas</h2>
            </div>
            <div class="row justify-content-center features">
                <div class="col-sm-6 col-md-5 col-lg-4 item">
                    <div class="box" style="background: rgba(3,203,143,0.5);">
                        <i class="fa fa-assistive-listening-systems icon" style="color: var(--bs-gray);"></i>
                        <h3 class="name">White-Noise</h3>
                        <p class="description">Quando a criança está estressada com os barulhos ambientes, o white-noise é uma ótima forma de ajuda-la a camuflar os barulhos externos.</p><a asp-area="" asp-controller="Home" asp-action="Wnoise" class="learn-more" >Saiba mais »</a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-5 col-lg-4 item">
                    <div class="box" style="background: rgba(255,160,18,0.5);">
                        <i class="fa fa-puzzle-piece icon" style="color: var(--bs-gray);"></i>
                        <h3 class="name">Pictogramas</h3>
                        <p class="description"> Com a ajuda dos pictogramas as crianças podem se sentir mais confortáveis para mudanças de rotina e também com a comunicação com os responsáveis.</p><a asp-area="" asp-controller="CardTables" asp-action="Index" class="learn-more" >Saiba mais »</a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-5 col-lg-4 item">
                    <div class="box" style="background: rgba(0,90,255,0.5);">
                        <i class="fa fa-star-half-empty icon" style="color: var(--bs-gray);"></i>
                        <h3 class="name">Mais ferramentas no futuro! </h3>
                        <p class="description">Estamos desenvolvendo mais ferramentas para o futuro! Quememos cada vez mais produzir para o público definido para ajudar todos que precisarem. Fique atento.</p><a asp-area="" asp-controller="Home" asp-action="Sobre" class="learn-more" >Saiba mais »</a>
                    </div>
                </div>
        
            </div>
        </div>
        </section>
    </div>
  )
}

export default IndexHome