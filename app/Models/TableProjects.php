<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TableProjects extends Model
{
    protected $table='projects';

    protected $fillable=['id','title', 'author', 'description', 'date', 'director', 'adviser','tutor', 'codirector' ];
}
