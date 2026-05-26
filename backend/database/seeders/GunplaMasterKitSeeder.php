<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\GunplaMasterKit;

class GunplaMasterKitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $kits = [
            ['model_name' => 'RX-78-2 Gundam', 'grade' => 'HG', 'series_universe' => 'Universal Century', 'release_year' => 2015],
            ['model_name' => 'RX-78-2 Gundam', 'grade' => 'MG', 'series_universe' => 'Universal Century', 'release_year' => 2013],
            ['model_name' => 'RX-78-2 Gundam', 'grade' => 'RG', 'series_universe' => 'Universal Century', 'release_year' => 2010],
            ['model_name' => 'RX-78-2 Gundam', 'grade' => 'PG', 'series_universe' => 'Universal Century', 'release_year' => 1998],
            ['model_name' => 'RX-78-2 Gundam', 'grade' => 'Entry Grade', 'series_universe' => 'Universal Century', 'release_year' => 2020],
            
            ['model_name' => 'MS-06S Char\'s Zaku II', 'grade' => 'HG', 'series_universe' => 'Universal Century', 'release_year' => 2020],
            ['model_name' => 'MS-06S Char\'s Zaku II', 'grade' => 'RG', 'series_universe' => 'Universal Century', 'release_year' => 2010],
            ['model_name' => 'MS-06S Char\'s Zaku II', 'grade' => 'MG', 'series_universe' => 'Universal Century', 'release_year' => 2007],
            
            ['model_name' => 'RX-93 v Gundam (Nu Gundam)', 'grade' => 'RG', 'series_universe' => 'Universal Century', 'release_year' => 2019],
            ['model_name' => 'RX-93 v Gundam (Nu Gundam)', 'grade' => 'MG', 'series_universe' => 'Universal Century', 'release_year' => 2012], // Ver.Ka
            ['model_name' => 'RX-93 v Gundam (Nu Gundam)', 'grade' => 'Entry Grade', 'series_universe' => 'Universal Century', 'release_year' => 2022],
            
            ['model_name' => 'MSN-04 Sazabi', 'grade' => 'RG', 'series_universe' => 'Universal Century', 'release_year' => 2018],
            ['model_name' => 'MSN-04 Sazabi', 'grade' => 'MG', 'series_universe' => 'Universal Century', 'release_year' => 2013], // Ver.Ka
            
            ['model_name' => 'ZGMF-X10A Freedom Gundam', 'grade' => 'MG', 'series_universe' => 'Cosmic Era', 'release_year' => 2016], // 2.0
            ['model_name' => 'ZGMF-X10A Freedom Gundam', 'grade' => 'RG', 'series_universe' => 'Cosmic Era', 'release_year' => 2011],
            ['model_name' => 'ZGMF-X20A Strike Freedom Gundam', 'grade' => 'MG', 'series_universe' => 'Cosmic Era', 'release_year' => 2006],
            
            ['model_name' => 'GN-001 Gundam Exia', 'grade' => 'MG', 'series_universe' => 'Anno Domini', 'release_year' => 2009],
            ['model_name' => 'GN-001 Gundam Exia', 'grade' => 'RG', 'series_universe' => 'Anno Domini', 'release_year' => 2014],
            
            ['model_name' => 'ASW-G-08 Gundam Barbatos', 'grade' => 'HG', 'series_universe' => 'Post Disaster', 'release_year' => 2015],
            ['model_name' => 'ASW-G-08 Gundam Barbatos', 'grade' => 'MG', 'series_universe' => 'Post Disaster', 'release_year' => 2019],
            ['model_name' => 'ASW-G-08 Gundam Barbatos Lupus Rex', 'grade' => 'HG', 'series_universe' => 'Post Disaster', 'release_year' => 2017],
            
            ['model_name' => 'XVX-016 Gundam Aerial', 'grade' => 'HG', 'series_universe' => 'Ad Stella', 'release_year' => 2022],
            ['model_name' => 'XVX-016 Gundam Aerial', 'grade' => 'MG', 'series_universe' => 'Ad Stella', 'release_year' => 2023], // Full Mechanics, mapping to MG roughly or custom
            
            ['model_name' => 'XXXG-00W0 Wing Gundam Zero EW', 'grade' => 'MG', 'series_universe' => 'After Colony', 'release_year' => 2020], // Ver.Ka
            ['model_name' => 'XXXG-00W0 Wing Gundam Zero EW', 'grade' => 'RG', 'series_universe' => 'After Colony', 'release_year' => 2014],
            
            ['model_name' => 'RX-0 Unicorn Gundam', 'grade' => 'MG', 'series_universe' => 'Universal Century', 'release_year' => 2010],
            ['model_name' => 'RX-0 Unicorn Gundam', 'grade' => 'RG', 'series_universe' => 'Universal Century', 'release_year' => 2017],
            ['model_name' => 'RX-0 Unicorn Gundam', 'grade' => 'PG', 'series_universe' => 'Universal Century', 'release_year' => 2014],
        ];

        foreach ($kits as $kitData) {
            GunplaMasterKit::firstOrCreate(
                ['model_name' => $kitData['model_name'], 'grade' => $kitData['grade']],
                $kitData
            );
        }
    }
}
