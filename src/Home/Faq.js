import React from 'react'

const Faq = () => {
  return (
    <div>
        
    
    <main class="page landing-page" style="font-family: Dekko, serif;">
        <section class="clean-block features" style="border-style: none;">
            <div class="container">
                <div class="block-heading" style="border-style: none;">
                    <div class="accordion" role="tablist" id="accordion-1" style="border-style: none;border-color: var(--bs-indigo);">
                        <div class="accordion-item" style="border-color: rgba(33,37,41);">
                            <h2 class="accordion-header" role="tab" style="border-style: none;"><button class="accordion-button collapsed border rounded-pill" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-1" aria-expanded="false" aria-controls="accordion-1 .item-1" style="color: rgb(0,0,0);background: var(--bs-red);">É gratuito?</button></h2>
                            <div class="accordion-collapse collapse item-1" role="tabpanel" data-bs-parent="#accordion-1" style="border-color: rgba(33,37,41,0);">
                                <div class="accordion-body">
                                    <p class="text-start mb-0" style="margin: 0px;color: rgb(33, 37, 41);">SIM! O site é um projeto que visa ser gratuito para todos que precisarem dele.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item" style="border-style: none;">
                            <h2 class="accordion-header" role="tab"><button class="accordion-button collapsed border rounded-pill" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-2" aria-expanded="false" aria-controls="accordion-1 .item-2" style="color: rgb(0,0,0);background: var(--bs-cyan);">Onde posso procurar mais informações sobre autismo?</button></h2>
                            <div class="accordion-collapse collapse item-2" role="tabpanel" data-bs-parent="#accordion-1">
                                <div class="accordion-body">
                                    <p class="text-start mb-0" style="margin: 0px;text-align: left;width: 100%;">Você pode procurar em várias fontes. Indicamos esses sites para você como primeiro contato:&nbsp;<br>website1.com.br<br>website2.com.br</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item" style="border-style: none;">
                            <h2 class="accordion-header" role="tab"><button class="accordion-button collapsed border rounded-pill" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-3" aria-expanded="false" aria-controls="accordion-1 .item-3" style="color: rgb(0,0,0);background: var(--bs-warning);">Meu filho vai ter algum resultado em quanto tempo?</button></h2>
                            <div class="accordion-collapse collapse item-3" role="tabpanel" data-bs-parent="#accordion-1">
                                <div class="accordion-body">
                                    <p class="text-start mb-0" style="width: 100%;margin: 0px;">Não existe como garantir que vai dar certo em três dias ou em dois meses. A pessoa deve ter um acompanhamento psicológico para maximizar o efeito positivo que a tecnologia possa dar e utilizar ela como uma aliada ao tratamento.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>   

    </main>
    
    <script src="~/bootstrap/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.js"></script>
    <script src="~/js/vanilla-zoom.js"></script>
    <script src="~/js/theme.js"></script>
    <script src="~/js/site.js"></script>
    <link rel="stylesheet" href="~/lib/bootstrap/dist/css/bootstrap.min.css" />


    </div>
  )
}

export default Faq