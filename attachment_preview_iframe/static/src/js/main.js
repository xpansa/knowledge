openerp.attachment_preview_iframe = function(instance) {
    var _t = instance.web._t;

    openerp.web.form.widgets.add('preview_binary', 'openerp.attachment_preview_iframe.PreviewBinary');
    openerp.attachment_preview_iframe.PreviewBinary = openerp.web.form.FieldBinaryFile.extend({
        // template: "preview_binary",
        get_iframe_url: function(attachment_id, attachment_url, attachment_extension, attachment_title) {
            return (window.location.origin || '') +
                '/attachment_preview/static/lib/ViewerJS/index.html#' +
                attachment_url.replace(window.location.origin, '') +
                '&title=' + encodeURIComponent(attachment_title) +
                '&ext=.' + encodeURIComponent(attachment_extension);
        },
        render_value: function() {
            this._super.apply(this, arguments);
            var self = this;
            if (this.get("effective_readonly") && this.get('value')) {
                (new instance.web.Model('ir.attachment')).call(
                    'get_binary_extension', [
                        this.view.dataset.model,
                        this.view.datarecord.id ? [this.view.datarecord.id] : [],
                        this.name,
                        this.node.attrs.filename,
                    ], {})
                    .then(function(extensions) {
                        var render = false;
                        _(extensions).each(function(extension) {
                            var iframe = self.$el.find('.preview_binary > iframe');
                            var oe_form_uri = self.$el.find('.oe_form_uri');
                            var oe_binary_preview = self.$el.find('.oe-binary-preview');
                            if (openerp.attachment_preview.can_preview(extension)) {
                                render = true;
                                var url = self.get_iframe_url(
                                    null,
                                    _.str.sprintf(
                                        '/web/binary/saveas?session_id=%s&model=%s&field=%s&id=%d',
                                        instance.session.session_id,
                                        self.view.dataset.model,
                                        self.name,
                                        self.view.datarecord.id),
                                    extension,
                                    _.str.sprintf(_t('Preview %s'), self.field.string));
                                iframe.prop('src', url).show();
                                oe_form_uri.hide();
                                oe_binary_preview.hide();
                            } else {
                                iframe.prop('src', '').hide();
                                oe_form_uri.show();
                                oe_binary_preview.show();
                            }
                        });
                    });
            }
        }
    });
}