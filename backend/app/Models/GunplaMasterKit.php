<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GunplaMasterKit extends Model
{
    protected $guarded = [];

    public function buildLogs()
    {
        return $this->hasMany(BuildLog::class, 'kit_id');
    }
}
