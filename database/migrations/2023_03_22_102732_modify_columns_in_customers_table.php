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
        Schema::table('customers', function (Blueprint $table) {
            $table->string('name')->nullable()->change();
            $table->string('email')->nullable()->unique(false)->change();
            $table->string('phone')->nullable()->change();
            $table->string('service')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('customers', function (Blueprint $table) {
            $table->string('name')->nullable(false)->change();
            $table->string('email')->nullable(false)->unique()->change();
            $table->string('phone')->nullable(false)->change();
            $table->string('service')->nullable(false)->change();
        });
    }
};
