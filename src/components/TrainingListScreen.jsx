import React from 'react';
import Header from './Header';
import { FileText, CheckCircle, ChevronRight, Circle } from 'lucide-react';

const TrainingListScreen = ({ onNavigate, onHomeClick }) => {
    const trainings = [
        { id: 1, title: 'İçindekiler', date: '17.12.24 13:35', status: 'done' },
        { id: 2, title: 'Multipl Miyelom Nedir?', date: '17.12.24 13:35', status: 'done' },
        { id: 3, title: 'Ağrı yönetimi-1', date: '17.12.24 13:35', status: 'done' },
        { id: 4, title: 'Ağrı yönetimi-2', date: '17.12.24 13:35', status: 'done' },
        { id: 5, title: 'Yorgunluk yönetimi-1', date: '17.12.24 13:35', status: 'done' },
        { id: 6, title: 'Yorgunluk yönetimi-2', date: '17.12.24 13:35', status: 'todo' },
        { id: 7, title: 'İştahsızlık yönetimi-1', date: '17.12.24 13:34', status: 'todo' },
        { id: 8, title: 'İştahsızlık yönetimi-2', date: '17.12.24 13:34', status: 'todo' },
        { id: 9, title: 'Enfeksiyon yönetimi-1', date: '17.12.24 13:34', status: 'done' },
        { id: 10, title: 'Enfeksiyon yönetimi-2', date: '17.12.24 13:34', status: 'todo' },
    ];

    return (
        <div>
            <Header title="Eğitimlerim" onHomeClick={onHomeClick} />
            <div style={{ padding: '1rem' }}>
                {trainings.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                        style={{
                            backgroundColor: 'white',
                            borderRadius: '25px',
                            padding: '1rem',
                            marginBottom: '1rem',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer',
                            border: '1px solid var(--border-color)'
                        }}
                    >
                        <div style={{ marginRight: '1rem' }}>
                            <FileText size={32} color="#757575" />
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.2rem' }}>
                                {item.title}
                            </div>
                            <div style={{ fontSize: '0.8rem', color: '#9e9e9e' }}>
                                Eklenme Tarihi: {item.date}
                            </div>
                        </div>
                        <div style={{ marginLeft: '1rem' }}>
                            {item.status === 'done' ? (
                                <CheckCircle size={28} color="var(--primary-color)" />
                            ) : (
                                <ChevronRight size={28} color="var(--primary-color)" />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrainingListScreen;
