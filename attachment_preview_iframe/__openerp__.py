# -*- coding: utf-8 -*-
#
#    Xpansa Preview Iframe
#    Copyright (C) 2014 Xpansa Group (<http://xpansa.com>).
#
#    This program is free software: you can redistribute it and/or modify
#    it under the terms of the GNU Affero General Public License as
#    published by the Free Software Foundation, either version 3 of the
#    License, or (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU Affero General Public License for more details.
#
#    You should have received a copy of the GNU Affero General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.
#
{
    'name': 'Xpansa Preview Iframe',
    'version': '0.1',
    'author': 'Xpansa Group',
    'website': 'http://xpansa.com',
    'summary': 'Xpansa Preview Iframe',
    'description': """
Xpansa Preview Iframe
=====================================
This addon allows to preview attachments inline the form supported by http://viewerjs.org.
Module adds a new form widget - 'preview_binary' which can be called on binary fields.
""",
    'depends': [
        'attachment_preview'
    ],
    'data': [
        'views/assets.xml'
    ],
    'qweb': [
        'static/src/xml/widget.xml'
    ],
    'installable': True,
    'auto_install': False,
}
