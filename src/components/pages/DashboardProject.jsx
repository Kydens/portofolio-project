import React from 'react'
import { ProjectsCard } from '@/components';

const DashboardProject = () => {
    return (
        <section className="h-full w-full flex flex-col gap-y-12">
            <h1 className="font-bold text-4xl text-center text-[#4E3A69]">My Project</h1>

            {/* Project Card */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center'>
                <ProjectsCard 
                    image='Prediksi-Saham' 
                    title='Prediksi Pergerakan Sinyal Saham IDX LQ45 Sektor Perbankan' 
                    desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat blanditiis vero incidunt nulla esse quo nesciunt temporibus eveniet unde perspiciatis.'
                    tags={['Laravel', 'BootstrapCSS', 'Python', 'Machine Learning']} 
                    />
                <ProjectsCard 
                    image='CMD' 
                    title='Aplikasi Pengingat Adzan' 
                    desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat blanditiis vero incidunt nulla esse quo nesciunt temporibus eveniet unde perspiciatis.' 
                    tags={['Python']} 
                    />
                <ProjectsCard 
                    image='Dashboard-Sangati' 
                    title='Dashboard IT Sangati' 
                    desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat blanditiis vero incidunt nulla esse quo nesciunt temporibus eveniet unde perspiciatis.'
                    tags={['Laravel', 'BootstrapCSS', 'MySQL']}
                    />
                <ProjectsCard 
                    image='LMSI' 
                    title='Website L&M Systems Indonesia' 
                    desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat blanditiis vero incidunt nulla esse quo nesciunt temporibus eveniet unde perspiciatis.' 
                    tags={['Next.js']}
                    />
            </div>
        </section>
    );
}

export default DashboardProject;