import React from 'react';
import Header from './Header';
import { ArrowLeft } from 'lucide-react';

// Using a placeholder image for the blood cell graphic
// Ideally, we would import the specific image if we had it separated, or use a public URL.
const PLACEHOLDER_IMG = "https://placehold.co/600x400/png?text=Blood+Cells";

const TrainingDetailScreen = ({ onBack, onHomeClick }) => {
    return (
        <div>
            <Header title="Eğitimlerim" onHomeClick={onHomeClick} />

            {/* Sub-header / Breadcrumb-ish */}
            <div style={{
                backgroundColor: '#f5f5f5',
                padding: '0.5rem 1rem',
                color: '#d32f2f',
                fontSize: '0.9rem',
                textAlign: 'center',
                fontWeight: 'bold'
            }}>
                Multipl Miyelom Nedir?
            </div>

            <div style={{ padding: '1rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                    Multipl Miyelom Nedir?
                </h2>

                <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                    <img
                        src={PLACEHOLDER_IMG}
                        alt="Multipl Miyelom"
                        style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                    />
                </div>

                <div style={{ lineHeight: '1.6', fontSize: '1em', textAlign: 'justify' }}>
                    <p style={{ marginBottom: '1rem' }}>
                        Miyelom, kemik iliğindeki plazma hücrelerinin kanseri şeklinde tanımlanır. Miyelom
                        hastalarının yaklaşık %90'ında tanı anında birden fazla tutulumu olması nedeniyle yaygın olarak
                        "Multipl miyelom" veya "Semptomatik (belirtileri olan) miyelom" olarak adlandırılır.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        Hastalık bazı hastalarda yavaş gelişim göstermesi nedeniyle "Asemptomatik (belirti göstermeyen)
                        miyelom" veya "Sessiz miyelom" şeklinde de adlandırılabilir. 'Asemptomatik Miyelom'da hastalık
                        mevcuttur fakat hastalığa ilişkin belirtiler yoktur. 'Semptomatik Miyelom'da ise anemi, kanda
                        kalsiyum seviyesinde artış, böbrek hasarı, kemik hastalığı veya sık enfeksiyonlar gibi miyelomla
                        ilişkili sorunlar vardır.
                    </p>
                    <p style={{ fontWeight: 'bold' }}>
                        Hastalığın tanı süreci;
                    </p>
                </div>
            </div>

            <div style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'var(--primary-color)',
                padding: '10px',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <button onClick={onBack} style={{ background: 'none', border: 'none', color: 'white' }}>
                    <ArrowLeft size={32} />
                </button>
            </div>
        </div>
    );
};

export default TrainingDetailScreen;
