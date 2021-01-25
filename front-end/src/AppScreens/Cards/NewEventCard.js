import React, { useEffect, useState } from 'react';
import { 
    Image,
    View,
    Text,
    ScrollView,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Header, Icon } from 'react-native-elements';
import { useForm } from 'react-hook-form';


function NewEventCard({ navigation }) {
    
    const { register, handleSubmit, setValue, getValues, errors } = useForm();
    const [ selected, setSelected ] = useState('none');

    useEffect(() => {
        register('name');
        register('description');
        register('address');
        register('maxCap');
        register('price');
        register('sport');
    }, [ register ]);

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <View style={{flex: 1}}>
            <Header
                backgroundColor="white"
                leftComponent={
                    <Icon
                        name='chevron-left'
                        onPress={
                            () => navigation.goBack()
                        }
                    />
                }
                centerComponent={{ 
                    text: 'Criar novo evento', 
                    style: {
                        color: '#000', 
                        fontSize: 20 
                    } 
                }}
            />
            <ScrollView 
                contentContainerStyle={{
                    justifyContent: 'space-around'
                }}
            >
                <View style={styles.container}>
                    {/* {photo && ( */}
                    <Image
                        style={{ 
                            width: 150, 
                            height: 150 
                        }}
                        source={{
                            uri: 'https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg'
                        }}
                    />
                    {/* )} */}
                    <View style={styles.imageButton}>
                        <Button 
                            title="Escolher imagem" 
                            //onPress={this.handleChoosePhoto}  
                        />
                    </View>
                    <TextInput
                        placeholder="Nome do evento"
                        style={styles.singleLineInput}
                        onChangeText={ text => {
                            setValue('name', text);
                        }}
                    />
                    <TextInput
                        placeholder="Descrição"
                        style={styles.multiLineInput}
                        multiline={true}
                        onChangeText={ text => {
                            setValue('description', text);
                        }}
                    />
                    <Text>Insira uma descrição breve, conte o que será feito, pipipi popopo</Text>
                    <TextInput
                        placeholder="Endereço"
                        style={styles.singleLineInput}
                        onChangeText={ text => {
                            setValue('address', text);
                        }}
                    />
                    <View style={{flexDirection: 'row'}}>
                        <View style={{width: '50%', paddingRight: 7}}>
                            <TextInput
                                keyboardType="numeric"
                                style={styles.numberInput}
                                defaultValue='0'
                                onChangeText={ text => {
                                    setValue('maxCap', text);
                                }}
                            />
                            <Text>Máximo de pessoas</Text>
                        </View>
                        <View style={{width: '50%', paddingLeft: 7}}>
                            <TextInput
                                keyboardType="numeric"
                                style={styles.numberInput}
                                defaultValue='0'
                                onChangeText={ text => {
                                    setValue('price', text);
                                }}
                            />
                            <Text>Preço por pessoa</Text>
                        </View>
                    </View>
                    <View 
                        style={{
                            borderColor: "black",
                            borderWidth: 1,
                            borderRadius: 1,
                            marginTop: 15
                        }}
                    >
                        <Picker
                            selectedValue={ selected }
                            style={styles.picker}
                            onValueChange={ (text, _) => {
                                setValue('sport', text);
                                setSelected(text);
                            }}
                        >
                            <Picker.Item label="Esporte" value="none"/>
                            <Picker.Item label="Futebol" value="futebol"/>
                            <Picker.Item label="Volei" value="volei"/>
                            <Picker.Item label="Basquete" value="basquete"/>
                            <Picker.Item label="Handbol" value="handbol"/>
                        </Picker>
                    </View>
                    <View style={{marginTop: 15}}>
                        <Button onPress={ handleSubmit(onSubmit) } title="Criar evento"/>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default NewEventCard;


const styles = StyleSheet.create({
    container: {
        padding:25,
        flex: 1,
    },
    imageButton: {
        marginTop: 15,
        width: 150,
    },
    singleLineInput: {
        marginTop: 15,
        padding: 8,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 1
    },
    multiLineInput: {
        marginTop: 15,
        padding: 8,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 1,
        height: 100,
        textAlignVertical: 'top'
    },
    numberInput: {
        marginTop: 15,
        padding: 8,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 1,
        // width: '45%'
    },
    picker: {
        padding: 7,
        backgroundColor: "white",
    }
})