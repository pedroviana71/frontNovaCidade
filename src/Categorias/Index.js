import React from "react";

const Index = () => {
  return (
    <div class="container">
      <div class="container d-flex justify-content-around align-items-center">
        <h1>Categoria </h1>
        <a asp-action="Create" class="btn btn-primary">
          Criar novo
        </a>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th>@Html.DisplayNameFor(model => model.Nome)</th>
            <th>@Html.DisplayNameFor(model => model.Cor)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          @foreach (var item in Model)
          {
            <tr>
              <td>@Html.DisplayFor(modelItem => item.Nome)</td>
              <td>
                <div
                  class="categoria-cores"
                  style="background: @Html.DisplayFor(modelItem => item.Cor);"
                >
                  @Html.DisplayFor(modelItem => item.Cor)
                </div>
              </td>
              <td>
                <a
                  asp-action="Edit"
                  asp-route-id="@item.Id"
                  class="btn btn-warning"
                >
                  <i class="fas fa-user-edit"></i>--Editar--
                </a>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  );
};

export default Index;
