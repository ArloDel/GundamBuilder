<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('gunpla_master_kits', function (Blueprint $table) {
            $table->id();
            $table->string('model_name');
            $table->enum('grade', ['SD', 'Entry Grade', 'HG', 'RG', 'MG', 'PG']);
            $table->string('series_universe')->nullable();
            $table->integer('release_year')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gunpla_master_kits');
    }
};
