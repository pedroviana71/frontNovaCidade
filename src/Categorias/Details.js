import React from "react";

const Details = () => {
  return (
    <div class="container">
      <h1>Details</h1>

      <div>
        <h4>Categoria</h4>
        <hr />
        <dl class="row">
          <dt class="col-sm-2">@Html.DisplayNameFor(model => model.Nome)</dt>
          <dd class="col-sm-10">@Html.DisplayFor(model => model.Nome)</dd>
          <dt class="col-sm-2">@Html.DisplayNameFor(model => model.Cor)</dt>
          <dd class="col-sm-10">@Html.DisplayFor(model => model.Cor)</dd>
        </dl>
      </div>
      <div>
        <a asp-action="Edit" asp-route-id="@Model.Id">
          Edit
        </a>{" "}
        |<a asp-action="Index">Back to List</a>
      </div>
    </div>
  );
};

export default Details;
