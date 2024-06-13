import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const LinkButton = ({text, path, icon}) => {
    return(
        <div class="w-100 d-flex justify-content-start">
            <a class="btn btn-sm btn-primary d-flex align-items-center justify-content-center gap-05 br-20" href={`${path}`}>
                <i class={`${icon}`}></i>
                {text}
            </a>
        </div>
    )
}
