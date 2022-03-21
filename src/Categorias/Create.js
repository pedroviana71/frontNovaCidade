import React from "react";

const Create = () => {
  return (
    <div class="container">
      <h1>Cria nova categoria</h1>

      <hr />
      <div class="d-flex p-2 justify-content-center mt-5 mb-5 pb-5">
        <div class="col-md-4">
          <form asp-action="Create">
            <div asp-validation-summary="ModelOnly" class="text-danger"></div>
            <div class="form-group">
              <label asp-for="Nome" class="control-label"></label>
              <input asp-for="Nome" class="form-control" />
              <span asp-validation-for="Nome" class="text-danger"></span>
            </div>
            <div class="form-group">
              <label asp-for="Cor" class="control-label"></label>
              <select asp-for="Cor" class="form-control">
                <option value="#0E9AFF">Azul Claro</option>
                <option value="#005AFF">Azul</option>
                <option value="#03CB8F">Verde Claro</option>
                <option value="#00A11F">Verde</option>
                <option value="#EAE000">Amarelo</option>
                <option value="#FFA012">Laranja</option>
                <option value="#DF0000">Vermelho</option>
                <option value="#bf5317">Marrom</option>
                <option value="#8940c2">Roxo</option>
                <option value="#e589e7">Rosa</option>
              </select>
              <span asp-validation-for="Cor" class="text-danger"></span>
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
