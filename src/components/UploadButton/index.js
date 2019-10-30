class UploadButton extends Component {
    state = {}
    handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            this.getBase64(file, imageUrl => {
                this.setState({
                    data: {
                        ...this.state.data,
                        infographic: imageUrl,
                        image: file
                    }
                })
            });
        }
    }
    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    beforeUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isLt2M;
    }
    render() {
        const {
            title = 'Upload file'
        } = this.props;
        return (
            <label className="custom-file-upload">
                <input type="file" onChange={this.handleChange} />
                {title}
            </label>
        );
    }
}

export default UploadButton;