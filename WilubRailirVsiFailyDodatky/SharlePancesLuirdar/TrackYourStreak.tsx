import { tushperlanFinlsRidl } from '../tushperlanFinlsRidl';
import React, {useState, useEffect,  useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    View,Image,Dimensions,Text,TouchableOpacity,
} from 'react-native';

const { width: wurtlnsl, height: hsioajen } = Dimensions.get('window');

const DAY_SIZE = wurtlnsl * 0.11;
const DAY_MARGIN = wurtlnsl * 0.015;
const CARD_HEIGHT = hsioajen * 0.18;
const CARD_RADIUS = wurtlnsl * 0.045;
const CARD_MARGIN = hsioajen * 0.025;
const PROGRESS_HEIGHT = hsioajen * 0.017;
const PROGRESS_RADIUS = PROGRESS_HEIGHT / 2;
const BUTTON_HEIGHT = hsioajen * 0.055;
const BUTTON_RADIUS = BUTTON_HEIGHT / 2.2;
const ICON_SIZE = wurtlnsl * 0.22;

const categories = [
    {
        desc: 'Pass 5 tests in this category too',
        title: 'Basics of Architecture',
        total: 5,
        image: require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/basics.png'), // заміни на свій шлях
        key: 'basics',
    },
    {
        image: require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/famousBuildings.png'), // заміни на свій шлях
        title: 'Famous buildings',
        desc: 'Pass 3 tests in this category too',
        key: 'famous',
        total: 3,
    },
];

export default function TrackYourStreak() {
    // Початковий прогрес: у всіх done = 0
    const [progress, setProgress] = useState([
        { done: 0, total: 5 },
        { done: 0, total: 3 },
    ]);

    // Завантажуємо прогрес з AsyncStorage при монтуванні
    useEffect(() => {
        loadProgress();
    }, []);

    // Завантажуємо прогрес
    const loadProgress = async () => {
        try {
            const saved = await AsyncStorage.getItem('streakProgress');
            if (saved) {
                setProgress(JSON.parse(saved));
            }
        } catch (error) {
            console.error('Error loading progress:', error);
        }
    };

    // Функція для оновлення прогресу після квізу
    const updateProgress = useCallback(async (categoryIdx: number) => {
        try {
            setProgress(prev => {
                const updated = [...prev];
                if (updated[categoryIdx] && updated[categoryIdx].done < updated[categoryIdx].total) {
                    updated[categoryIdx].done += 1;
                }
                // Зберігаємо в AsyncStorage
                AsyncStorage.setItem('streakProgress', JSON.stringify(updated));
                return updated;
            });
        } catch (error) {
            console.error('Error saving progress:', error);
        }
    }, []);

    // Експортуємо функцію через глобальний об'єкт
    useEffect(() => {
        (global as any).updateStreakProgress = updateProgress;
    }, [updateProgress]);

    return (
        <View style={{
            
            
            
            
            backgroundColor: 'transparent',flex: 1,alignItems: 'center',
        }}>
            {/* 7 днів */}
            <View style={{
                marginBottom: hsioajen * 0.03,
                justifyContent: 'center',
                flexDirection: 'row',
            }}>
                {[1,2,3,4,5,6,7].map((d, i) => (
                    <View key={i} style={{
                        marginHorizontal: DAY_MARGIN,
                        height: DAY_SIZE,
                        borderRadius: DAY_SIZE / 4,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: DAY_SIZE,
                        opacity: 1,
                        backgroundColor: '#169DD8',
                    }}>
                        <Text style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: DAY_SIZE * 0.45,
                        }}>{d}</Text>
                    </View>
                ))}
            </View>

            {/* Категорії */}
            {categories.map((cat, idx) => {
                const done = progress[idx].done;
                const total = cat.total;
                const isDone = done >= total;
                return (
                    <View key={cat.key} style={{
                        flexDirection: 'row',
                        shadowColor: '#000',
                        width: wurtlnsl * 0.92,
                        paddingVertical: hsioajen * 0.014,
                        elevation: 2,
                        backgroundColor: '#169DD8',marginBottom: CARD_MARGIN,borderRadius: CARD_RADIUS,shadowOpacity: 0.08,paddingHorizontal: wurtlnsl * 0.03,
                        shadowOffset: { width: 0, height: 2 },
                        alignItems: 'center',
                        shadowRadius: 8,
                    }}>
                        {/* Іконка */}
                        <View style={{
                            borderRadius: ICON_SIZE * 0.18,
                            height: ICON_SIZE,
                            alignItems: 'center',
                            overflow: 'hidden',
                            marginRight: wurtlnsl * 0.03,
                            backgroundColor: '#e6f2fa',
                            width: ICON_SIZE,
                            justifyContent: 'center',
                        }}>
                            <Image  source={cat.image} style={{
                                height: '100%',
                                resizeMode: 'cover',
                                width: '100%',
                                }}
                            />
                        </View>
                        {/* Текст і прогрес */}
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{
                                fontSize: wurtlnsl * 0.055,
                                fontFamily: tushperlanFinlsRidl.unuB,
                                color: '#f7b92a',
                                marginBottom: hsioajen * 0.005,
                            }}>{cat.title}</Text>
                            <Text style={{
                                borderRadius: wurtlnsl * 0.012,
                                color: '#fff',
                                alignSelf: 'flex-start',
                                fontFamily: tushperlanFinlsRidl.unuRel,
                                fontSize: wurtlnsl * 0.038,
                                paddingHorizontal: wurtlnsl * 0.012,
                                marginBottom: hsioajen * 0.012,
                                paddingVertical: 1,
                            }}>{cat.desc}</Text>
                            {/* Прогрес */}
                            <View style={{
                                marginBottom: hsioajen * 0.012,
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <View style={{
                                    backgroundColor: '#A27508',
                                    height: PROGRESS_HEIGHT,
                                    borderRadius: PROGRESS_RADIUS,
                                    marginRight: wurtlnsl * 0.025,
                                    overflow: 'hidden',
                                    flex: 1,
                                }}>
                                    <View style={{
                                        height: '100%',
                                        backgroundColor: isDone ? '#58DE05' : '#FEB70A',
                                        width: `${(done/total)*100}%`,
                                        borderRadius: PROGRESS_RADIUS,
                                    }} />
                                </View>
                                <Text style={{
                                    textAlign: 'right',
                                    fontSize: wurtlnsl * 0.038,
                                    fontFamily: tushperlanFinlsRidl.unuMei,
                                    minWidth: wurtlnsl * 0.16,
                                    color: 'white',
                                }}>
                                    {(done === 0)
                                        ? `${done} out of ${total}`
                                        : (isDone ? 'Done' : `${done} out of ${total}`)}
                                </Text>
                            </View>
                            {/* Кнопка */}
                            <TouchableOpacity
                                style={{
                                    alignItems: 'center',
                                    shadowColor: '#000',
                                    backgroundColor: '#f7b92a',
                                    height: BUTTON_HEIGHT * 0.8,
                                    justifyContent: 'center',
                                    width: wurtlnsl * 0.32,
                                    alignSelf: 'center',
                                    shadowOpacity: 0.08,
                                    shadowOffset: { width: 0, height: 1 },
                                    shadowRadius: 4,
                                    borderRadius: BUTTON_RADIUS,
                                }}
                                activeOpacity={0.8}
                            >
                                <Text style={{
                                    fontSize: wurtlnsl * 0.043,
                                    color: '#513B05',
                                    fontFamily: tushperlanFinlsRidl.unuMei,
                                }}>
                                    {isDone ? (cat.key === 'basics' ? 'Share' : 'Start') : 'Start'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            })}
        </View>
    );
}
