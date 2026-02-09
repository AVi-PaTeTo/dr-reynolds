// [34.016778, -118.4951];

export default function OfficeMap() {
    return (
        <div className="h-full w-full overflow-hidden rounded-lg">
            {/* <iframe
                
                width="600"
                height="450"
                style="border:0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d6614.111774275053!2d-118.49583954365539!3d34.01677637498846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDAxJzAwLjEiTiAxMTjCsDI5JzQyLjgiVw!5e0!3m2!1sen!2sin!4v1770624088535!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}
