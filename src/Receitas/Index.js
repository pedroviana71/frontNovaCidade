import React from 'react'

const Index = () => {
  return (
    <div class="container mb-5">
    <div class="row"></div>
    <h1 class="col-10">Receitas</h1>
    <p class="col-2">
        <a asp-action="Create" class="btn btn-info">Criar novo</a>
    </p>
    <section class="portfolio-block projects-cards">
        <div class="container">
            <div class="heading"></div>
            <div class="row">
                @foreach(var item in Model)
                {
                    <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
                        <div class="card border-0"  style="min-height: 350px; background: #f8f8f8;">
                            <a asp-action="Details" asp-route-id="@item.Id">
                                <img class="card-img-top scale-on-hover card_index_receita_img" src="@Html.DisplayFor(modelItem => item.UrlImg)" alt="Card Image">
                            </a>
                            <div class=" card_index_receita">
                                <h5 class="p-1"  style="min-height: 50px;">@Html.DisplayFor(modelItem => item.NomeReceita)</h5>
                                <p class="text-muted card-text  " style="max-height: 100px; overflow: hidden;">
                                    @Html.DisplayFor(modelItem => item.Descricao)
                                </p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    </section>
</div>
  )
}

export default Index