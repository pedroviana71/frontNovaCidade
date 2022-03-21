import React from 'react'

const Details = () => {
  return (
    <div class="container mb-5">


    <div>
        <div class="row">
            <h2 class="col-10">Receitas</h2>
            <div class="col-2">
                <a class="btn btn-info  align-content-center p-2" asp-action="Index">Voltar</a>
            </div>
            
        </div>

        <hr />



        <div class="page blog-post-list">
            <section class="clean-block clean-blog-list dark">
                <div class="">
                    <div class="block-heading">
                        <h1 class="text-info">@Html.DisplayFor(model => model.NomeReceita)</h1>
                        <p>@Html.DisplayFor(model => model.DescricaoTopo)</p>
                    </div>
                    <div class="block-content">
                        <div class="clean-blog-post">
                            <div class="row">
                                <div class="col-lg-5">
                                    <img class="rounded img-fluid" src="@Html.DisplayFor(model => model.UrlImg)">
                                    <p>
                                        Autor: @Html.DisplayFor(model => model.Autor)
                                    </p>
                                </div>
                                <div class="col-lg-7">
                                    <h3>@Html.DisplayFor(model => model.NomeReceita)</h3>
                                    <p>
                                        <i class="fas fa-utensils"></i>
                                        <strong> Rendimento @Html.DisplayFor(model => model.NumPorcoes) porções</strong>
                                    </p>
                                    <p>
                                        <i class="fas fa-clock"></i>
                                        <strong> Preparo Médio ( @Html.DisplayFor(model => model.TempoPreparo) )</strong>
                                    </p>
                                    <p>
                                        <i class="fas fa-fire"></i>
                                        <strong> Calorias: @Html.DisplayFor(model => model.Calorias)</strong>
                                    </p>
                                    <p><a class="btn btn-warning" asp-action="Edit" asp-route-id="@Model.Id">Editar</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    @{
                        <p>
                            @Html.DisplayFor(model => model.Descricao)
                        </p>

                        <h3>Ingredientes</h3>
                        var todosIngs = Model.Ingredientes.ToString();
                        string[] ingsPorParte = todosIngs.Split('_');
                        <!--aux para classes dinamicas-->
                        var cont1 = 0;
                        var cont2 = 0;
                        foreach (var parte in ingsPorParte)
                        {
                            cont1++;
                            string[] ings = parte.Split(';');
                            foreach (var i in ings)
                            {
                                cont2++;
                                if (i == ings[0] && ingsPorParte.Length > 1)
                                {
                                    <h4>@ings[0]</h4>
                                }
                                else if (i == ings[ings.Length - 1])
                                {
                                    continue;
                                }
                                else
                                {
                                    var check1 = cont1 + "ings" + cont2;
                                    <fieldset class="check-image">
                                        <label for="@check1" class="ml-3 d-flex">
                                            <input class=" text-center" type="checkbox" name="@check1" id="@check1"><i></i>
                                            <p class="mt-1"><span class=""> @i</span></p>
                                        </label>
                                    </fieldset>
                                }
                            }
                        }
                        <h3>Modo de Preparo:</h3>
                        var todosMod = Model.ModoPreparo;
                        string[] modPorParte = todosMod.ToString().Split('_');
                        <!--aux para classes dinamicas-->
                        var contAux = 0;
                        var cont = 1;

                        foreach (var parteMod in modPorParte)
                        {
                            contAux++;
                            string[] mod = parteMod.Split(';');

                            foreach (var b in mod)
                            {
                                if (b == mod[0] && modPorParte.Length > 1)
                                {
                                    <h4>@mod[0]</h4>
                                }
                                else if (b == mod[mod.Length - 1])
                                {
                                    continue;
                                }
                                else
                                {
                                    var check = contAux + "check" + cont;
                                    var texto = contAux + "texto" + cont;
                                    <div class="">
                                        <fieldset class="check-image">
                                            <label for="@check" class="ml-3 @texto">
                                                <input class="@check text-center" type="checkbox" name="@check" id="@check"><i></i>Passo @cont
                                                <p class="ml-3"><span class="@texto"> @b</span></p>
                                            </label>
                                        </fieldset>
                                    </div>
                                    cont++;

                                    <script>
                                        $(document).ready(function () {
                                            $(".@check").change(function () {
                                                if ($(this).prop('checked')) {
                                                    $(".@texto").addClass("font-italic tracejado");
                                                } else {
                                                    $(".@texto").removeClass("font-italic tracejado");
                                                }
                                            })
                                        })
                                    </script>
                                }

                            }
                        }

                    }
                </div>
            </section>
        </div>

    </div>
</div>
  )
}

export default Details