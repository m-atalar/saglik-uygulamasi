import React, { useState } from 'react';
import Header from './Header';
import { User, Camera, Trash2 } from 'lucide-react';

const ProfileScreen = ({
    userBio,
    setUserBio,
    fontSize,
    setFontSize,
    isDarkMode,
    setIsDarkMode,
    currentTheme,
    setCurrentTheme,
    onDeleteData
}) => {
    const themes = [
        '#E53935', // Red
        '#D81B60', // Pink
        '#8E24AA', // Purple
        '#5E35B1', // Deep Purple
        '#3949AB', // Indigo
        '#1E88E5', // Blue
        '#039BE5', // Light Blue
        '#00ACC1', // Cyan
        '#00897B', // Teal
        '#43A047', // Green
        '#7CB342', // Light Green
        '#FDD835', // Yellow
        '#FB8C00', // Orange
        '#F4511E', // Deep Orange
    ];

    return (
        <div style={{ paddingBottom: '2rem' }}>
            <Header title="Profil" onHomeClick={() => { }} />

            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Avatar Section */}
                <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginBottom: '2rem' }}>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        backgroundColor: currentTheme,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: '1rem'
                    }}>
                        <User size={60} color="white" />
                    </div>
                    <div>
                        <button style={{
                            backgroundColor: '#E65100', // Orange for button
                            color: 'white',
                            border: 'none',
                            padding: '0.5rem 1rem',
                            borderRadius: '4px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            RESMİ DEĞİŞTİR
                        </button>
                    </div>
                </div>

                {/* Bio Section */}
                <div style={{
                    width: '100%',
                    border: '1px solid var(--border-color)',
                    borderRadius: '10px',
                    padding: '1rem',
                    backgroundColor: 'var(--card-bg)',
                    marginBottom: '2rem'
                }}>
                    <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>
                        Kendinle İlgili Bir Şeyler Yaz
                    </label>
                    <textarea
                        value={userBio}
                        onChange={(e) => setUserBio(e.target.value)}
                        style={{
                            width: '100%',
                            minHeight: '120px',
                            padding: '0.5rem',
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                            marginBottom: '1rem',
                            resize: 'vertical'
                        }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button style={{
                            backgroundColor: '#D84315',
                            color: 'white',
                            border: 'none',
                            padding: '0.5rem 1.5rem',
                            borderRadius: '4px',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}>
                            KAYDET
                        </button>
                    </div>
                </div>

                {/* Font Size Slider */}
                <div style={{ width: '100%', marginBottom: '2rem', textAlign: 'center' }}>
                    <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '1rem', color: '#D84315' }}>
                        Yazı Boyutu
                    </label>
                    <input
                        type="range"
                        min="0.8"
                        max="1.5"
                        step="0.1"
                        value={fontSize}
                        onChange={(e) => setFontSize(parseFloat(e.target.value))}
                        style={{ width: '80%', accentColor: '#00BFA5' }}
                    />
                </div>

                {/* Night Mode Toggle */}
                <div style={{ width: '100%', marginBottom: '2rem' }}>
                    <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '1rem', textAlign: 'center', color: '#D84315' }}>
                        Gece Modunu Etkinleştir
                    </label>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem' }}>
                        <span style={{ fontWeight: 'bold' }}>Gündüz Modu</span>
                        <label className="switch" style={{ position: 'relative', display: 'inline-block', width: '50px', height: '28px' }}>
                            <input
                                type="checkbox"
                                checked={isDarkMode}
                                onChange={(e) => setIsDarkMode(e.target.checked)}
                                style={{ opacity: 0, width: 0, height: 0 }}
                            />
                            <span style={{
                                position: 'absolute',
                                cursor: 'pointer',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: isDarkMode ? '#E65100' : '#ccc',
                                transition: '.4s',
                                borderRadius: '34px'
                            }}></span>
                            <span style={{
                                position: 'absolute',
                                content: '""',
                                height: '20px',
                                width: '20px',
                                left: isDarkMode ? '26px' : '4px',
                                bottom: '4px',
                                backgroundColor: 'white',
                                transition: '.4s',
                                borderRadius: '50%'
                            }}></span>
                        </label>
                    </div>
                </div>

                {/* Theme Selection */}
                <div style={{ width: '100%', marginBottom: '2rem' }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '0.5rem',
                        padding: '0 1rem'
                    }}>
                        <span style={{ fontSize: '0.9rem', color: '#757575' }}>Tema Seçimi</span>
                    </div>
                    <div style={{
                        border: '1px solid #ccc',
                        borderRadius: '20px',
                        padding: '0.5rem',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '8px'
                    }}>
                        {themes.map((color) => (
                            <button
                                key={color}
                                onClick={() => setCurrentTheme(color)}
                                style={{
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    backgroundColor: color,
                                    border: currentTheme === color ? '2px solid black' : 'none',
                                    cursor: 'pointer'
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Delete All Data */}
                <button
                    onClick={onDeleteData}
                    style={{
                        width: '100%',
                        backgroundColor: '#D32F2F',
                        color: 'white',
                        border: 'none',
                        padding: '1rem',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                    TÜM VERİLERİ SİL
                </button>

            </div>
        </div>
    );
};

export default ProfileScreen;
