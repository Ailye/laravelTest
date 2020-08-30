<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Bobby Lapointe',
            'email' => 'bobby@lapointe.fr',
            'password' => bcrypt('secret'),
            'score' => 0,
        ]);
    }
}
