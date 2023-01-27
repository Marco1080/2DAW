<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    //UNO A MUCHOS INVERSA
    public function user() {
        return $this->belongsTo(User::class);
    }

    public function category() {
        return $this->belongsTo(Category::class);
    }

    //MUCHOS A MUCHOS
    public function tags() {
        return $this->belongsToMany(Tag::class);
    }
    //UNO A UNO POLIMORFICA
    public function imagen() {
        return $this->morphOne(Image::class, 'imageable');
    }
}
