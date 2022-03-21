import React from "react";

const Edit = () => {
  return (
    <div class="container">
      <div class="text-center">
        <h1>Editando uma categoria</h1>
      </div>
      <hr />
      <div class="d-flex p-2 justify-content-center">
        <div class="col-md-4">
          <form asp-action="Edit">
            <div asp-validation-summary="ModelOnly" class="text-danger"></div>
            <input type="hidden" asp-for="Id" />
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
            </div>
            <div class="form-group">
              <a asp-action="Index" class="btn btn-primary mr-3">
                Voltar
              </a>{" "}
              |
              <a
                asp-action="Delete"
                asp-route-id="@Model.Id"
                class="btn btn-danger  m-2"
              >
                Deletar
              </a>{" "}
              |
              <input
                type="submit"
                value="Salvar"
                class="btn btn-success ml-3"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
