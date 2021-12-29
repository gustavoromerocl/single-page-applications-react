import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createVideo } from '../store/videos';

let VideosForm = (props) => {
    let {register, handleSubmit} = useForm();
    let dispatch = useDispatch();

    let onSubmit = async (video) => {
        /* console.log(video); */
        let formData = new FormData();

        formData.append('title', video.title);
        formData.append('video', video.video[0]);

        console.log(formData);

        dispatch(
            createVideo(formData)
        )
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="title" {...register('title')} placeholder='Título' />
                <input type="file" name="video" {...register('video')} />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default VideosForm;