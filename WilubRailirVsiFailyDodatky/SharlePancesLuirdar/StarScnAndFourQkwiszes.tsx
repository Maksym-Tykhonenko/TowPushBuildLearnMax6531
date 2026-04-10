import {
    Text,
    View,
    TouchableOpacity,Share,             Dimensions,
    Image,
} from 'react-native';
import chothemforkviz from '../AreshuWilnarAsetyLibrow/chothemforkviz';
import { PursheBlurigrantdRaow } from '../LuiwoBilurCimpensRelna/PursheBlurigrantdRaow';
import React, { useState, useEffect } from 'react';
import { tushperlanFinlsRidl } from '../tushperlanFinlsRidl';

const { width: odsuWfnsoi, height: qpfjHkapo } = Dimensions.get('window');

function getRandomQuestions(themeIdx: number) {
    const questions = chothemforkviz[themeIdx].questions;
    const arr = [];
    const used = new Set();
    while (arr.length < 5) {
        const idx = Math.floor(Math.random() * questions.length);
        if (!used.has(idx)) {
            arr.push(questions[idx]);
            used.add(idx);
        }
    }
    return arr;
}

export default function ZorpGallery(props: {
    isHomeStage?: boolean;
    setIsHomeStage?: (v: boolean) => void;
    steLykipterNfo?: any; // залишаємо для сумісності
}) {
    const [stage, setStage] = useState<'home' | 'quiz' | 'result'>('home');
    const [themeIdx, setThemeIdx] = useState<number | null>(null);
    const [questions, setQuestions] = useState<any[]>([]);
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);
    const [correct, setCorrect] = useState(0);
    const [showGradient, setShowGradient] = useState(true);
    const [answerState, setAnswerState] = useState<'none' | 'correct' | 'wrong'>('none');
    const [timer, setTimer] = useState(15);

    // Timer logic
    useEffect(() => {
        if (stage === 'quiz' && timer > 0 && selected === null) {
            const id = setTimeout(() => setTimer(timer - 1), 1000);
            return () => clearTimeout(id);
        }
        // NEW: handle timer end
        if (stage === 'quiz' && timer === 0 && selected === null) {
            setSelected(questions[current].answer);
            setAnswerState('wrong');
        }
    }, [timer, stage, selected, questions, current]);

    // Handle answer feedback
    useEffect(() => {
        if (answerState !== 'none') {
            setShowGradient(false);
            const id = setTimeout(() => {
                setShowGradient(true);
                setAnswerState('none');
                setSelected(null);
                if (current < 4) {
                    setCurrent(current + 1);
                    setTimer(15);
                } else {
                    setStage('result');
                }
            }, 1000);
            return () => clearTimeout(id);
        }
    }, [answerState]);

    // Start quiz
    const startQuiz = (idx: number) => {
        setThemeIdx(idx);
        setQuestions(getRandomQuestions(idx));
        setStage('quiz');
        setCurrent(0);
        setCorrect(0);
        setSelected(null);
        setTimer(15);
        if (props.setIsHomeStage) props.setIsHomeStage(false); // <-- тут ховаємо боттом-бар
    };

    // Handle answer
    const handleAnswer = (optIdx: number) => {
        if (selected !== null) return;
        setSelected(optIdx);
        if (optIdx === questions[current].answer) {
            setCorrect(correct + 1);
            setAnswerState('correct');
        } else {
            setAnswerState('wrong');
        }
    };

    // Викликаємо setIsHomeStage(true) лише при переході у "home"
    useEffect(() => {
        if (stage === 'home' && props.setIsHomeStage) {
            props.setIsHomeStage(true);
        }
    }, [stage, props.setIsHomeStage]);

    // Home screen
    if (stage === 'home') {
        return (
            <View style={{alignItems: 'center',flex: 1,backgroundColor: 'transparent',
            }}>
                {chothemforkviz.map((theme, idx) => (
                    <View key={idx} style={{
                        backgroundColor: '#1DB0E4',
                        overflow: 'hidden',
                        borderRadius: odsuWfnsoi * 0.04,
                        width: odsuWfnsoi * 0.92,
                        flexDirection: 'row',
                        marginBottom: qpfjHkapo * 0.02,
                        padding: odsuWfnsoi * 0.03,
                        borderColor: '#096992',
                        borderWidth: odsuWfnsoi * 0.004,
                        alignItems: 'center',
                    }}>
                        <PursheBlurigrantdRaow />
                        <Image source={theme.caimegr} style={{
                                borderRadius: odsuWfnsoi * 0.065,
                                marginRight: odsuWfnsoi * 0.03,
                                height: odsuWfnsoi * 0.13,
                                width: odsuWfnsoi * 0.13,
                            }}
                        />
                        <View style={{ flex: 1 }}>
                            <Text style={{
                                fontFamily: tushperlanFinlsRidl.unuMei,
                                color: '#000000',
                                fontSize: odsuWfnsoi * 0.05,
                                marginBottom: odsuWfnsoi * 0.01,
                            }}>
                                {theme.theme}
                            </Text>
                            <Text style={{
                                fontSize: odsuWfnsoi * 0.04,
                                color: '#fff',
                                fontFamily: tushperlanFinlsRidl.unuRel,
                            }}>
                                {theme.desocrit}
                            </Text>
                            <TouchableOpacity
                                onPress={() => startQuiz(idx)}
                                style={{
                                    borderRadius: odsuWfnsoi * 0.1,
                                    alignSelf: 'flex-end',
                                    paddingVertical: odsuWfnsoi * 0.02,
                                    backgroundColor: '#FEB70A',
                                    marginLeft: odsuWfnsoi * 0.02,
                                    alignItems: 'center',
                                    width: odsuWfnsoi * 0.3,
                                    paddingHorizontal: odsuWfnsoi * 0.04,
                                }}>
                                <Text style={{
                                    fontSize: odsuWfnsoi * 0.04,
                                    color: '#1A3B5C',
                                    fontFamily: tushperlanFinlsRidl.unuMei,
                                }}>Choose</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View>
        );
    }

    // Quiz screen
    if (stage === 'quiz' && questions.length > 0) {
        const q = questions[current];
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: 'transparent',

            }}>
                {/* Theme info */}
                <View style={{
                    flexDirection: 'row',
                    borderRadius: odsuWfnsoi * 0.04,
                    padding: odsuWfnsoi * 0.03,
                    backgroundColor: '#1DB0E4',
                    alignItems: 'center',
                    marginBottom: qpfjHkapo * 0.03,
                    width: odsuWfnsoi * 0.92,
                }}>
                    <Image source={chothemforkviz[themeIdx!].caimegr}
                        style={{
                            width: odsuWfnsoi * 0.13,
                            marginRight: odsuWfnsoi * 0.03,
                            borderRadius: odsuWfnsoi * 0.065,
                            height: odsuWfnsoi * 0.13,
                        }}
                    />
                    <View style={{ flex: 1 }}>
                        <Text style={{
                            fontSize: odsuWfnsoi * 0.045,
                            color: '#1A3B5C',
                            fontFamily: tushperlanFinlsRidl.unuMei,
                            marginBottom: odsuWfnsoi * 0.01,
                        }}>
                            {chothemforkviz[themeIdx!].theme}
                        </Text>
                        <Text style={{
                            fontSize: odsuWfnsoi * 0.04,
                            color: '#1A3B5C',
                            fontFamily: tushperlanFinlsRidl.unuRel,
                        }}>
                            {chothemforkviz[themeIdx!].desocrit}
                        </Text>
                    </View>
                </View>

                {/* Question */}
                <View style={{
                    marginBottom: qpfjHkapo * 0.03,
                    padding: odsuWfnsoi * 0.04,
                    width: odsuWfnsoi * 0.92,
                    backgroundColor: '#1DB0E4',
                    borderRadius: odsuWfnsoi * 0.04,
                }}>
                    {/* Question info */}
                    <View style={{
                        marginBottom: qpfjHkapo * 0.03,
                        padding: odsuWfnsoi * 0.04,
                        flexDirection: 'row',
                        backgroundColor: '#036D8C',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderRadius: odsuWfnsoi * 0.04,
                    }}>
                        <Text style={{
                            fontSize: odsuWfnsoi * 0.04,
                            color: 'white',
                            fontFamily: tushperlanFinlsRidl.unuMei,
                        }}>
                            Question {current + 1}/5
                        </Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                fontFamily: tushperlanFinlsRidl.unuMei,
                                fontSize: odsuWfnsoi * 0.04,
                                marginRight: odsuWfnsoi * 0.01,
                                color: 'white',
                            }}>
                                {timer.toString().padStart(2, '0')}
                            </Text>
                            <Image
                                source={require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/clock.png')}
                                style={{
                                    width: odsuWfnsoi * 0.045,
                                    height: odsuWfnsoi * 0.045,
                                }}
                            />
                        </View>
                    </View>
                    <Text style={{
                        fontSize: odsuWfnsoi * 0.05,
                        color: 'white',
                        fontFamily: tushperlanFinlsRidl.unuMei,
                        textAlign: 'center',
                    }}>
                        {q.question}
                    </Text>
                </View>
                {/* Options */}
                <View style={{
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    width: odsuWfnsoi * 0.92,
                }}>
                    {q.options.map((opt: string, idx: number) => {
                        let bg = '#1DB0E4';
                        let color = '#1A3B5C';
                        let borderColor = '#FFD24A';
                        if (selected !== null) {
                            if (idx === q.answer && answerState === 'correct') {
                                bg = '#0AC20A';
                                color = '#fff';
                                borderColor = '#0AC20A';
                            } else if (idx === selected && answerState === 'wrong') {
                                bg = '#C20A0D';
                                color = '#fff';
                                borderColor = '#C20A0D';
                            }
                        }
                        return (
                            <TouchableOpacity
                                key={idx}
                                disabled={selected !== null || timer === 0}
                                onPress={() => handleAnswer(idx)}
                                style={{
                                    height: qpfjHkapo * 0.08,
                                    borderWidth: 2,
                                    backgroundColor: bg,
                                    marginBottom: qpfjHkapo * 0.02,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: odsuWfnsoi * 0.03,
                                    borderColor: borderColor,
                                    width: odsuWfnsoi * 0.44,
                                }}>
                                {showGradient && selected === null && <PursheBlurigrantdRaow style={{
                                    borderRadius: odsuWfnsoi * 0.03,
                                }} />}
                                <Text style={{
                                    fontSize: odsuWfnsoi * 0.045,
                                    textAlign: 'center',
                                    color: color,
                                    fontFamily: tushperlanFinlsRidl.unuRel,
                                }}>
                                    {opt}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
                {/* Exit button */}
                <TouchableOpacity
                    onPress={() => setStage('home')}
                    style={{
                        left: odsuWfnsoi * 0.04,
                        backgroundColor: '#FFD24A',
                        bottom: qpfjHkapo * 0.04,
                        width: odsuWfnsoi * 0.13,
                        height: odsuWfnsoi * 0.13,
                        borderRadius: odsuWfnsoi * 0.065,
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                    }}>
                    <Text style={{
                        fontSize: odsuWfnsoi * 0.07,
                        color: '#1A3B5C',
                        fontWeight: '700',
                    }}>✕</Text>
                </TouchableOpacity>
            </View>
        );
    }

    // Result screen
    if (stage === 'result') {
        const handleBackHome = () => {
            // Оновлюємо прогрес у Streak екрані
            if ((global as any).updateStreakProgress && themeIdx !== null) {
                (global as any).updateStreakProgress(themeIdx);
            }
            setStage('home');
            if (props.setIsHomeStage) props.setIsHomeStage(true); // <-- тут повертаємо боттом-бар
        };

        return (
            <View style={{
                alignItems: 'center',








                flex: 1,








                backgroundColor: 'transparent',








            }}>
                {/* Top info */}
                <View style={{
                    flexDirection: 'row',
                    borderRadius: odsuWfnsoi * 0.04,
                    backgroundColor: '#1DB0E4',
                    width: odsuWfnsoi * 0.92,
                    alignItems: 'center',
                    overflow: 'hidden',
                    marginBottom: qpfjHkapo * 0.03,
                    borderWidth: odsuWfnsoi * 0.004,
                    borderColor: '#096992',
                    padding: odsuWfnsoi * 0.04,
                }}>
                    <PursheBlurigrantdRaow />
                    <Image
                        source={require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/maxAvatar.png')}
                        style={{
                            width: odsuWfnsoi * 0.13,
                            height: odsuWfnsoi * 0.13,
                            borderRadius: odsuWfnsoi * 0.065,
                            marginRight: odsuWfnsoi * 0.03,
                        }}
                    />
                    <Text style={{
                        fontSize: odsuWfnsoi * 0.045,
                        color: '#1A3B5C',
                        fontFamily: tushperlanFinlsRidl.unuRel,
                        flex: 1,
                    }}>
                        And here are the results of your quiz. You must have tried very hard and put in your best effort.
                    </Text>
                </View>
                {/* Result avatar */}
                <Image
                    source={require('../AreshuWilnarAsetyLibrow/TulsherWiulaLarenInamgesWopei/resperson.png')}
                    style={{
                        width: odsuWfnsoi * 0.7,
                        height: qpfjHkapo * 0.5,
                        borderRadius: odsuWfnsoi * 0.125,
                        marginBottom: qpfjHkapo * 0.03,
                    }}
                    resizeMode='contain'
                />
                {/* Result info */}
                <View style={{
                    backgroundColor: '#1DB0E4',
                    borderRadius: odsuWfnsoi * 0.04,
                    padding: odsuWfnsoi * 0.04,
                    width: odsuWfnsoi * 0.92,
                    borderWidth: odsuWfnsoi * 0.004,
                    overflow: 'hidden',
                    borderColor: '#096992',
                    marginTop: -qpfjHkapo * 0.19,
                    marginBottom: qpfjHkapo * 0.03,
                }}>
                    <PursheBlurigrantdRaow />
                    <Text style={{
                        textAlign: 'center',
                        color: '#FFD24A',
                        fontFamily: tushperlanFinlsRidl.unuMei,
                        fontSize: odsuWfnsoi * 0.05,
                        marginBottom: odsuWfnsoi * 0.02,
                    }}>
                        Result
                    </Text>
                    <Text style={{
                        fontSize: odsuWfnsoi * 0.045,
                        color: 'white',
                        fontFamily: tushperlanFinlsRidl.unuRel,
                        textAlign: 'center',
                    }}>
                        You answered {correct} out of 5 questions correctly. This is a good result, keep going and you will prove your skill.
                    </Text>
                </View>
                {/* Buttons */}
                <View style={{
                    flexDirection: 'row',
                    width: odsuWfnsoi * 0.92,
                    justifyContent: 'space-between',
                }}>
                    <TouchableOpacity onPress={handleBackHome}
                        style={{
                            borderRadius: odsuWfnsoi * 0.065,
                            borderColor: '#A27508',
                            width: odsuWfnsoi * 0.16,
                            backgroundColor: '#FFB70A',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: odsuWfnsoi * 0.004,
                            height: odsuWfnsoi * 0.16,
                        }}>
                        <Text style={{
                            fontSize: odsuWfnsoi * 0.07,
                            color: '#1A3B5C',
                            fontFamily: tushperlanFinlsRidl.unuB
                        }}>✕</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#FFB70A',
                            borderWidth: odsuWfnsoi * 0.004,
                            borderRadius: odsuWfnsoi * 0.05,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: odsuWfnsoi * 0.16,
                            borderColor: '#A27508',
                            width: odsuWfnsoi * 0.7,
                        }} onPress={() => {Share.share({message: `I answered ${correct} / 5 answers in build quiz!`})}}>
                        <Text style={{
                            fontSize: odsuWfnsoi * 0.045,
                            color: '#1A3B5C',
                            fontFamily: tushperlanFinlsRidl.unuMei,
                        }}>Share</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return null;
}
