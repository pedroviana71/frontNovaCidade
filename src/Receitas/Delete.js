import React from 'react'

const Delete = () => {
  return (
    <div class="container mb-5">
    <div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Atenção!</h4>
        <h3>Você realmente quer excluir este item?</h3>
        <hr>
        <p class="mb-0">Lembrando que sempre que precisar, você também pode editar a Receita.  ; )</p>

    </div>
    <hr />
    <dl class="row">
        <dt class="col-sm-2">
            @Html.DisplayNameFor(model => model.NomeReceita)
        </dt>
        <dd class="col-sm-10">
            @Html.DisplayFor(model => model.NomeReceita)
        </dd>
        <dt class="col-sm-2">
            @Html.DisplayNameFor(model => model.UrlImg)
        </dt>
        <dd class="col-sm-10">
            @Html.DisplayFor(model => model.UrlImg)
        </dd>
        <dt class="col-sm-2">
            @Html.DisplayNameFor(model => model.DescricaoTopo)
        </dt>
        <dd class="col-sm-10">
            @Html.DisplayFor(model => model.DescricaoTopo)
        </dd>
        <dt class="col-sm-2">
            @Html.DisplayNameFor(model => model.Descricao)
        </dt>
        <dd class="col-sm-10">
            @Html.DisplayFor(model => model.Descricao)
        </dd>
        <dt class="col-sm-2">
            @Html.DisplayNameFor(model => model.Ingredientes)
        </dt>
        <dd class="col-sm-10">
            @Html.DisplayFor(model => model.Ingredientes)
        </dd>
        <dt class="col-sm-2">
            @Html.DisplayNameFor(model => model.ModoPreparo)
        </dt>
        <dd class="col-sm-10">
            @Html.DisplayFor(model => model.ModoPreparo)
        </dd>
        <dt class="col-sm-2">
            @Html.DisplayNameFor(model => model.NumPorcoes)
        </dt>
        <dd class="col-sm-10">
            @Html.DisplayFor(model => model.NumPorcoes)
        </dd>
        <dt class="col-sm-2">
            @Html.DisplayNameFor(model => model.Calorias)
        </dt>
        <dd class="col-sm-10">
            @Html.DisplayFor(model => model.Calorias)
        </dd>
        <dt class="col-sm-2">
            @Html.DisplayNameFor(model => model.TempoPreparo)
        </dt>
        <dd class="col-sm-10">
            @Html.DisplayFor(model => model.TempoPreparo)
        </dd>
        <dt class="col-sm-2">
            @Html.DisplayNameFor(model => model.Autor)
        </dt>
        <dd class="col-sm-10">
            @Html.DisplayFor(model => model.Autor)
        </dd>
    </dl>

    <form asp-action="Delete">
        <input type="hidden" asp-for="Id" />
        <input type="submit" value="Deletar" class="btn btn-danger mr-3" /> |
        <a asp-action="Index" class="btn btn-primary ml-3">Voltar</a>
    </form>
</div>
  )
}

export default Delete