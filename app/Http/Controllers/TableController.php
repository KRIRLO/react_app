<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TableProjects;

class TableController extends Controller
{

        // se crea una funcion para mostrar la informacion de la tabla

        public function get_all(){
            return TableProjects::all();
          }
      
}
