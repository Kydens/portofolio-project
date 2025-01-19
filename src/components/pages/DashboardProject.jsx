import React from 'react'
import { ComponentAlert, ProjectsCard } from '@/components';

const DashboardProject = () => {
    return (
        <section className="h-full w-full flex flex-col gap-y-12">
            <h1 className="font-bold text-4xl text-center text-[#4E3A69]">My Project</h1>

            {/* Project Card */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center'>
                <ProjectsCard 
                    image='Prediksi-Saham' 
                    title='Prediksi Pergerakan Sinyal Saham IDX LQ45 Sektor Perbankan' 
                    desc='Aplikasi prediksi pergerakan sinyal secara Real-Time dengan menggunakan Machine Learning metode Random Forest, XGBoost, dan Voting Regression.'
                    tags={['Laravel', 'BootstrapCSS', 'Python', 'Machine Learning']}
                    href={'https://github.com/Kydens/prediksi-IDX-LQ45-Bank'}
                    />
                <ProjectsCard 
                    image='CMD' 
                    title='Aplikasi Pengingat Adzan' 
                    desc='Aplikasi sebagai pengingat adzan yang dijalankan melalui CMD dan akan bersuara saat sudah waktunya adzan.' 
                    tags={['Python']} 
                    href={'https://github.com/Kydens/Prayer-Reminder'}
                    />
                <ProjectsCard 
                    image='Dashboard-Sangati' 
                    title='Dashboard IT Sangati' 
                    desc='Aplikasi dashboard untuk internal IT PT. Sangati Soerya Sejahtera. Aplikasi ini menunjang hal-hal yang diperlukan oleh tim internal IT PT. Sangati Soerya Sejahtera.'
                    tags={['Laravel', 'BootstrapCSS', 'MySQL']}
                    href={''}
                    />
                <ProjectsCard 
                    image='LMSI' 
                    title='Website L&M Systems Indonesia' 
                    desc='Aplikasi portofolio website L&M Systems Indonesia untuk mempromosikan perusahaan dan jasa yang disediakan.' 
                    tags={['Next.js']}
                    href={''}
                    />
            </div>
        </section>
    );
}

export default DashboardProject;