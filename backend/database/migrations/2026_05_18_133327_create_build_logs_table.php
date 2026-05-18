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
        Schema::create('build_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('kit_id')->constrained('gunpla_master_kits')->onDelete('cascade');
            $table->enum('status', ['Backlog', 'In Progress', 'Completed'])->default('Backlog');
            $table->enum('build_type', ['Straight Build', 'Detailed', 'Custom Paint'])->default('Straight Build');
            $table->string('start_photo_url')->nullable();
            $table->string('end_photo_url')->nullable();
            $table->integer('xp_gained')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('build_logs');
    }
};
