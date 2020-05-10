import React from 'react';

const button = (props) => {
    return (
        <a
            class={props.buttonStyle ?? 'button is-primary'}
            href={props.buttonLink ?? '/'}>
                <span class="icon is-small">
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </span>
                <span>
                    {props.buttonName ?? 'Button'}
                </span>
        </a>
    );
};

export default button;