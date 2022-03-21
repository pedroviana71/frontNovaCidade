import React from "react";

const Create = () => {
  return (
    <div class="container">
      <h1>Criar nova Receita</h1>

      <hr />
      <h4>Receita</h4>
      <div class="row">
        <div class="col-md-6 ml-md-5">
          <form asp-action="Create">
            <div asp-validation-summary="ModelOnly" class="text-danger"></div>
            <div class="form-group">
              <label asp-for="NomeReceita" class="control-label"></label>
              <input asp-for="NomeReceita" class="form-control" />
              <span asp-validation-for="NomeReceita" class="text-danger"></span>
            </div>
            <div class="form-group">
              <label asp-for="UrlImg" class="control-label"></label>
              <input asp-for="UrlImg" class="form-control" />
              <span asp-validation-for="UrlImg" class="text-danger"></span>
            </div>
            <div class="form-group">
              <label asp-for="DescricaoTopo" class="control-label"></label>
              <textarea
                asp-for="DescricaoTopo"
                rows="10"
                class="form-control"
              ></textarea>
              <span
                asp-validation-for="DescricaoTopo"
                class="text-danger"
              ></span>
            </div>
            <div class="form-group">
              <label asp-for="Descricao" class="control-label"></label>
              <textarea
                asp-for="Descricao"
                rows="10"
                class="form-control"
              ></textarea>
              <span asp-validation-for="Descricao" class="text-danger"></span>
            </div>
            <div class="form-group">
              <label asp-for="Ingredientes" class="control-label"></label>
              <textarea
                asp-for="Ingredientes"
                rows="10"
                class="form-control"
              ></textarea>
              <span
                asp-validation-for="Ingredientes"
                class="text-danger"
              ></span>
            </div>
            <div class="form-group">
              <label asp-for="ModoPreparo" class="control-label"></label>
              <textarea
                asp-for="ModoPreparo"
                rows="10"
                class="form-control"
              ></textarea>
              <span asp-validation-for="ModoPreparo" class="text-danger"></span>
            </div>
            <div class="form-group">
              <label asp-for="NumPorcoes" class="control-label"></label>
              <input asp-for="NumPorcoes" class="form-control" />
              <span asp-validation-for="NumPorcoes" class="text-danger"></span>
            </div>
            <div class="form-group">
              <label asp-for="Calorias" class="control-label"></label>
              <input asp-for="Calorias" class="form-control" />
              <span asp-validation-for="Calorias" class="text-danger"></span>
            </div>
            <div class="form-group">
              <label asp-for="TempoPreparo" class="control-label"></label>
              <input asp-for="TempoPreparo" class="form-control" />
              <span
                asp-validation-for="TempoPreparo"
                class="text-danger"
              ></span>
            </div>
            <div class="form-group">
              <label asp-for="Autor" class="control-label"></label>
              <input asp-for="Autor" class="form-control" />
              <span asp-validation-for="Autor" class="text-danger"></span>
            </div>
            <div class="form-group">
              <input type="submit" value="Criar" class="btn btn-success m-2" />{" "}
              |
              <a asp-action="Index" class="btn btn-primary m-2">
                Voltar
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
