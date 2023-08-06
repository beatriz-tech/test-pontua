import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import image from "../../image/photoLogin.png";
import "./Cards.scss";

function Cards() {
  useEffect(() => {});

  return (
    <div class="card">
      <div class="row no-gutters">
        <div class="col">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/5/5d/Wolverine_%28James_%27Logan%27_Howlett%29.png"
            class="img-fluid"
            alt=""
          />
        </div>
      </div>
      <div class="w-100 text-muted p-3">
        <p>Wolverine</p>
        <p>
          Born with super-human senses and the power to heal from almost any
          wound, Wolverine was captured by a secret Canadian organization and
          given an unbreakable ...
        </p>
      </div>
      <div class="row no-gutters">
        <div class="col">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/5/5d/Wolverine_%28James_%27Logan%27_Howlett%29.png"
            class="img-fluid"
            alt=""
          />
        </div>
      </div>
      <div class="w-100 text-muted p-3">
        <p>Wolverine</p>
        <p>
          Born with super-human senses and the power to heal from almost any
          wound, Wolverine was captured by a secret Canadian organization and
          given an unbreakable ...
        </p>
      </div>
      <div class="row no-gutters">
        <div class="col-auto">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/5/5d/Wolverine_%28James_%27Logan%27_Howlett%29.png"
            class="img-fluid"
            alt=""
          />
        </div>
      </div>
      <div class="w-100 text-muted p-3">
        <p>Wolverine</p>
        <p>
          Born with super-human senses and the power to heal from almost any
          wound, Wolverine was captured by a secret Canadian organization and
          given an unbreakable ...
        </p>
      </div>
      <div class="row no-gutters">
        <div class="col-auto">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/5/5d/Wolverine_%28James_%27Logan%27_Howlett%29.png"
            class="img-fluid"
            alt=""
          />
        </div>
      </div>
      <div class="w-100 text-muted p-3">
        <p>Wolverine</p>
        <p>
          Born with super-human senses and the power to heal from almost any
          wound, Wolverine was captured by a secret Canadian organization and
          given an unbreakable ...
        </p>
      </div>
    </div>
  );
}

export default Cards;
